import { ClientOnly } from '@tanstack/react-router';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

// Fallback for when the theme is not yet set to prevent flashing of incorrect theme
const ThemeButtonFallback = () => (
    <div className="theme-toggle" role="group" aria-label="Theme">
        <button
            type="button"
            className="theme-toggle__btn"

            title="Light theme"
            aria-label="Light theme"

        >
            <Sun />
        </button>
        <button
            type="button"
            className="theme-toggle__btn"
            title="Dark theme"
            aria-label="Dark theme"
        >
            <Moon />
        </button>
    </div>
)

export default function ThemeButtons() {
    const { theme, setTheme } = useTheme();
    return (
        <ClientOnly fallback={<ThemeButtonFallback />}>
            <div className="theme-toggle" role="group" aria-label="Theme">
                <button
                    type="button"
                    className="theme-toggle__btn"
                    aria-pressed={theme === "light"}
                    title="Light theme"
                    aria-label="Light theme"
                    onClick={() => setTheme("light")}
                >
                    <Sun />
                </button>
                <button
                    type="button"
                    className="theme-toggle__btn"
                    aria-pressed={theme === "dark"}
                    title="Dark theme"
                    aria-label="Dark theme"
                    onClick={() => setTheme("dark")}
                >
                    <Moon />
                </button>
            </div>
        </ClientOnly>
    )
}
