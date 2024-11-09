import useTheme from "@/Hooks/useTheme";
import { Button } from "@/shadcn/components/ui/button";
import { SunIcon } from "lucide-react";

export default function AppThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} variant="ghost" size="icon">
            <SunIcon className="!size-5" />
        </Button>
    );
}
