import { ExternalLink } from "lucide-react";
import ThemeButtons from "./ThemeButtons";

export default function Header() {
    return (
        <header className="page-container py-4">
            <span className="text-2xl font-bold">M7BASE</span>
            <ThemeButtons />
            <a href="https://github.com/bremmdev/m7base" target="_blank">GitHub Repo <ExternalLink /></a>
        </header>
    );
}
