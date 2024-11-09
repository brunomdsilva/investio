import { useEffect, useState } from "react";

export default function useTheme() {
    const getInitialTheme = () => localStorage.getItem("theme") === "dark";

    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return { isDark, toggleTheme };
}
