import { IconGithub } from "@/Components/AppIcons";
import AppLogo from "@/Components/AppLogo";
import AppThemeToggle from "@/Components/AppThemeToggle";
import { isCurrentRoute } from "@/helpers";
import { Button } from "@/shadcn/components/ui/button";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import TheHeaderDropdown from "./Partials/TheHeaderDropdown";

export type MenuItem = {
    label: string;
    route: string;
    active?: boolean;
};

const menu: MenuItem[] = [
    { label: "Dashboard", route: route("dashboard") },
    { label: "Investments", route: route("investments.index") },
    { label: "Transactions", route: route("transactions.index") },
];

export default function TheHeader() {
    const computedMenu: MenuItem[] = menu.map((each) => ({
        ...each,
        active: isCurrentRoute(each.route),
    }));

    return (
        <header className="py-6 flex items-center border-b">
            <div className="container flex items-center gap-6">
                <Link href={route("dashboard")}>
                    <AppLogo />
                </Link>

                <div className="flex items-center gap-2 max-md:hidden">
                    {computedMenu.map((each) => (
                        <Button key={each.label} variant={each.active ? "default" : "secondary"} asChild>
                            <Link href={each.route}>{each.label}</Link>
                        </Button>
                    ))}
                </div>

                <div className="grow"></div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/brunomdsilva" target="_blank">
                            <IconGithub className="!size-5" />
                        </a>
                    </Button>

                    <AppThemeToggle />

                    <TheHeaderDropdown menu={computedMenu} />
                </div>
            </div>
        </header>
    );
}