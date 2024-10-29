import { IconGithub } from "@/Components/AppIcons";
import AppLogo from "@/Components/AppLogo";
import AppThemeToggle from "@/Components/AppThemeToggle";
import { githubLink } from "@/constants";
import { getCurrentRoute } from "@/helpers";
import { Button } from "@/shadcn/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import { route } from "ziggy-js";

export default function TheHeader() {
    const user = usePage().props.auth.user;

    const menu = [
        { label: "Dashboard", route: route("dashboard") },
        { label: "Investments", route: route("investments.index") },
        { label: "Transactions", route: route("transactions.index") },
    ];

    return (
        <header className="py-6 flex items-center border-b">
            <div className="container flex items-center gap-6">
                <Link href={route("dashboard")}>
                    <AppLogo />
                </Link>

                <div className="flex items-center gap-2">
                    {menu.map((each) => (
                        <Button
                            key={each.label}
                            variant={getCurrentRoute() === each.route ? "default" : "secondary"}
                            asChild
                        >
                            <Link href={each.route}>{each.label}</Link>
                        </Button>
                    ))}
                </div>

                <div className="grow"></div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                        <a href={githubLink} target="_blank" className="p-1 rounded-md hover:bg-muted">
                            <IconGithub className="!size-5" />
                        </a>
                    </Button>

                    <AppThemeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <span className="text-sm">{user.name}</span>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={route("profile.edit")} className="cursor-pointer">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="w-full cursor-pointer"
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
