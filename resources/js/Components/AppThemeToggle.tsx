import { Button } from "@/shadcn/components/ui/button";
import { SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function AppThemeToggle() {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <Button onClick={() => setIsDark(!isDark)} variant="outline" size="icon">
            <SunIcon className="!size-5" />
        </Button>
    );
}
