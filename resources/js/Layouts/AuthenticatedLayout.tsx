import AppSidebar from "@/Components/AppSidebar";
import AppToaster from "@/Components/AppToaster";
import TheHeader from "@/Components/TheHeader";
import { SidebarProvider } from "@/shadcn/components/ui/sidebar";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

type Props = {
    headTitle: string;
} & PropsWithChildren;

export default function AuthenticatedLayout(props: Props) {
    return (
        <>
            <Head title={props.headTitle} />

            <AppToaster />

            <SidebarProvider>
                <AppSidebar />
                <main className="w-full flex flex-col">
                    <TheHeader title={props.headTitle} />
                    <div className="grow py-8 sm:py-12">
                        <div className="container">{props.children}</div>
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}
