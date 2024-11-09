import AppContainer from "@/Components/AppContainer";
import AppToaster from "@/Components/AppToaster";
import TheFooter from "@/Components/TheFooter/TheFooter";
import TheHeader from "@/Components/TheHeader/TheHeader";
import useTheme from "@/Hooks/useTheme";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

type Props = {
    headTitle: string;
} & PropsWithChildren;

export default function AuthenticatedLayout(props: Props) {
    useTheme();

    return (
        <>
            <Head title={props.headTitle} />

            <AppToaster />

            <div className="min-h-screen flex flex-col">
                <TheHeader />

                <main className="flex flex-col grow py-8 sm:py-12">
                    <AppContainer>
                        <div className="grid gap-8">{props.children}</div>
                    </AppContainer>
                </main>

                <TheFooter />
            </div>
        </>
    );
}
