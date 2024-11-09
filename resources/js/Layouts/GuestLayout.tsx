import AppContainer from "@/Components/AppContainer";
import AppLogo from "@/Components/AppLogo";
import AppToaster from "@/Components/AppToaster";
import useTheme from "@/Hooks/useTheme";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { route } from "ziggy-js";

type Props = {
    headTitle: string;
} & PropsWithChildren;

export default function GuestLayout(props: Props) {
    useTheme();

    return (
        <>
            <Head title={props.headTitle} />

            <AppToaster />

            <div className="min-h-screen bg-background flex flex-col gap-8 items-center sm:justify-center py-20">
                <Link href={route("dashboard")}>
                    <AppLogo className="h-10" />
                </Link>

                <AppContainer className="flex justify-center">{props.children}</AppContainer>
            </div>
        </>
    );
}
