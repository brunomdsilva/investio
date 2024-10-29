import AppToaster from "@/Components/AppToaster";
import TheHeader from "@/Components/TheHeader";
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

            <div className="min-h-screen flex flex-col">
                <TheHeader title={props.headTitle} />

                <main className="flex flex-col grow">
                    <div className="grow py-8 sm:py-12">
                        <div className="container">{props.children}</div>
                    </div>
                </main>
            </div>
        </>
    );
}
