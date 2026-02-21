import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="page-container py-4">
      <span className="text-2xl font-bold">M7BASE</span>
      <div className="theme-toggle" role="group" aria-label="Theme">
        <button
          type="button"
          className="theme-toggle__btn"
          aria-pressed={theme === "light"}
          title="Light theme"
          aria-label="Light theme"
          onClick={() => setTheme("light")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-sun-icon lucide-sun">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>
        <button
          type="button"
          className="theme-toggle__btn"
          aria-pressed={theme === "dark"}
          title="Dark theme"
          aria-label="Dark theme"
          onClick={() => setTheme("dark")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-moon-icon lucide-moon">
            <path
              d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
          </svg>
        </button>
      </div>
      <a href="https://github.com/bremmdev/m7base" target="_blank">GitHub Repo <svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg></a>
    </header>
  );
}
