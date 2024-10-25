import { toast } from "sonner";
import { Button } from "./ui/button";

export default function AppThemeToggle() {
    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
    }

    function triggerToast() {
        toast.success("Hello from Sonner!", {
            description: "This is a toast message",
        });
    }

    return (
        <div className="fixed right-10 top-10 flex items-center gap-4">
            <Button onClick={toggleTheme}>Toggle Theme</Button>
            <Button onClick={triggerToast}>Toaster</Button>
        </div>
    );
}
