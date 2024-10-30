import { isCurrentRoute } from "@/helpers";
import { Button } from "@/shadcn/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, MenuIcon } from "lucide-react";
import { route } from "ziggy-js";
import { MenuItem } from "../TheHeader";

type Props = {
    menu: MenuItem[];
};

export default function TheHeaderDropdown(props: Props) {
    const user = usePage().props.auth.user;
    const isMobile = useIsMobile();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {isMobile ? (
                    <Button variant="outline" size="icon" className="md:hidden">
                        <MenuIcon className="!size-5" />
                    </Button>
                ) : (
                    <Button variant="outline" className="max-md:hidden">
                        <span className="text-sm">{user.name}</span>
                        <ChevronDown />
                    </Button>
                )}
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-52">
                {isMobile && (
                    <>
                        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {props.menu.map((each) => (
                            <DropdownMenuItem key={each.label} asChild>
                                <Link
                                    href={each.route}
                                    className={`${isCurrentRoute(each.route) && "bg-primary text-primary-foreground"}`}
                                >
                                    {each.label}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </>
                )}

                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={route("profile.edit")}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={route("logout")} method="post" as="button" className="w-full">
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
