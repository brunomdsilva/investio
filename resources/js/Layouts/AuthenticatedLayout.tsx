import AppSidebar from "@/Components/AppSidebar";
import { SidebarProvider } from "@/shadcn/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function AuthenticatedLayout(props: PropsWithChildren) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full flex flex-col">
                <div className="py-4 border-2 border-black">
                    <div className="container">HEADER</div>
                </div>
                <div className="grow py-8">
                    <div className="container">{props.children}</div>
                </div>
            </main>
        </SidebarProvider>
    );
}
