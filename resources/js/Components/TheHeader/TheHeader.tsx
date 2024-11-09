import { IconGithub } from "@/Components/AppIcons";
import AppLogo from "@/Components/AppLogo";
import AppThemeToggle from "@/Components/AppThemeToggle";
import { Button } from "@/shadcn/components/ui/button";
import { isCurrentRoute } from "@/utils/helpers";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import AppContainer from "../AppContainer";
import TheHeaderDropdown from "./Partials/TheHeaderDropdown";

export type MenuItem = {
    label: string;
    route: string;
    active?: boolean;
};

const menu: MenuItem[] = [
    { label: "Dashboard", route: route("dashboard") },
    { label: "Assets", route: route("assets.index") },
    { label: "Transactions", route: route("transactions.index") },
    { label: "Holdings", route: route("holdings.index") },
];

export default function TheHeader() {
    const computedMenu: MenuItem[] = menu.map((each) => ({
        ...each,
        active: isCurrentRoute(each.route),
    }));

    return (
        <header className="py-6 flex items-center border-b">
            <AppContainer className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Link href={route("dashboard")}>
                        <AppLogo />
                    </Link>

                    <div className="flex items-center gap-1 max-md:hidden">
                        {computedMenu.map((each) => (
                            <Button key={each.label} variant={each.active ? "default" : "ghost"} asChild>
                                <Link href={each.route}>{each.label}</Link>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/brunomdsilva" target="_blank">
                            <IconGithub className="!size-5" />
                        </a>
                    </Button>

                    <AppThemeToggle />

                    <TheHeaderDropdown menu={computedMenu} />
                </div>
            </AppContainer>
        </header>
    );
}
