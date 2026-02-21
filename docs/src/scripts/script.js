(() => {
    const STORAGE_KEY = "m7base-theme";
    const VALID_THEMES = new Set(["light", "dark"]);
  
    const media =
      typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;
  
    function getSystemTheme() {
      return media && media.matches ? "dark" : "light";
    }
  
    function getStoredTheme() {
      try {
        const value = localStorage.getItem(STORAGE_KEY);
        return VALID_THEMES.has(value) ? value : null;
      } catch {
        return null;
      }
    }
  
    function setStoredTheme(theme) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // ignore
      }
    }
  
    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  
    function getPreferredTheme() {
      return getStoredTheme() ?? getSystemTheme();
    }
  
    // Apply ASAP (before CSS paints, since script loads in <head>)
    applyTheme(getPreferredTheme());
  
    // Legacy select support (can be removed if no longer used)
    let themeSelectEl = null;
    let themeToggleButtons = null;
  
    function syncSelector(theme) {
      if (!themeSelectEl) return;
      themeSelectEl.value = theme;
    }
  
    function syncToggleButtons(theme) {
      if (!themeToggleButtons) return;
      themeToggleButtons.forEach((btn) => {
        const btnTheme = btn.getAttribute("data-theme-value");
        btn.setAttribute("aria-pressed", btnTheme === theme ? "true" : "false");
      });
    }
  
    function initThemeSelector() {
      themeSelectEl = document.getElementById("theme-select");
      if (!themeSelectEl) return;
  
      const theme = getPreferredTheme();
      syncSelector(theme);
  
      themeSelectEl.addEventListener("change", () => {
        const nextTheme = themeSelectEl.value;
        if (!VALID_THEMES.has(nextTheme)) return;
        applyTheme(nextTheme);
        setStoredTheme(nextTheme);
      });
    }
  
    function initThemeToggleButtons() {
      themeToggleButtons = Array.from(
        document.querySelectorAll('[data-theme-value="light"], [data-theme-value="dark"]')
      );
      if (!themeToggleButtons.length) return;
  
      const theme = getPreferredTheme();
      syncToggleButtons(theme);
  
      themeToggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextTheme = btn.getAttribute("data-theme-value");
          if (!VALID_THEMES.has(nextTheme)) return;
          applyTheme(nextTheme);
          setStoredTheme(nextTheme);
          syncToggleButtons(nextTheme);
          syncSelector(nextTheme);
        });
      });
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        initThemeSelector();
        initThemeToggleButtons();
      });
    } else {
      initThemeSelector();
      initThemeToggleButtons();
    }
  
    // Keep in sync with OS theme changes if user hasn't chosen manually
    if (media) {
      const onSystemThemeChange = () => {
        if (getStoredTheme()) return;
        const theme = getSystemTheme();
        applyTheme(theme);
        syncSelector(theme);
        syncToggleButtons(theme);
      };
  
      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", onSystemThemeChange);
      } else if (typeof media.addListener === "function") {
        media.addListener(onSystemThemeChange);
      }
    }
  })();