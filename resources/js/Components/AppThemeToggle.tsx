import { Button } from "@/shadcn/components/ui/button";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./AppIcons";

export default function AppThemeToggle() {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

    const Icon = isDark ? IconSun : IconMoon;

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <Button onClick={() => setIsDark(!isDark)} variant="outline" size="icon">
            <Icon className="!size-5" />
        </Button>
    );
}
