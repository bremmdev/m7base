import { ExternalLink } from "lucide-react";
import ThemeButtons from "./ThemeButtons";
import { Link } from "@tanstack/react-router";
import { HamburgerButton } from "./SideBar";

export default function Header() {
    return (
        <header className="page-container py-4">
            <HamburgerButton />
            <Link to="/" className="text-2xl font-bold">M7BASE</Link>
            <ThemeButtons />
            <a href="https://github.com/bremmdev/m7base" target="_blank">GitHub Repo <ExternalLink /></a>
        </header>
    );
}
