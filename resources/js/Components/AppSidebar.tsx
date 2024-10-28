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
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import AppLogo from "./AppLogo";

const menu = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "My Investments",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
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
