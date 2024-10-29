import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/shadcn/components/ui/sidebar";
import { Home, InboxIcon } from "lucide-react";
import { route } from "ziggy-js";
import AppLogo from "./AppLogo";

const menu = [
    {
        title: "Dashboard",
        url: route("dashboard"),
        icon: Home,
    },
    {
        title: "Transactions",
        url: route("transactions.index"),
        icon: InboxIcon,
    },
    {
        title: "Settings",
        url: route("profile.edit"),
        icon: InboxIcon,
    },
];

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <AppLogo className="size-7" />
                <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>App</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.map((each) => (
                                <SidebarMenuItem key={each.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={each.url}>
                                            <each.icon />
                                            <span>{each.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
