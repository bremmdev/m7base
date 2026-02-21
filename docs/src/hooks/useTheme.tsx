import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "m7base-theme";
type Theme = "light" | "dark";
const DEFAULT_THEME: Theme = "light";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function getPreferredTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

function subscribeToSystemTheme(callback: () => void) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function useTheme() {
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
    () => DEFAULT_THEME
  );

  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setThemeState(getPreferredTheme());
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!getStoredTheme()) {
      setThemeState(systemTheme);
      applyTheme(systemTheme);
    }
  }, [systemTheme]);

  return { theme, setTheme } as const;
}
