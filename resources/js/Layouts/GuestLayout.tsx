import AppLogo from "@/Components/AppLogo";
import AppThemeToggle from "@/Components/AppThemeToggle";
import AppToaster from "@/Components/AppToaster";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

type Props = {
    headTitle: string;
} & PropsWithChildren;

export default function GuestLayout(props: Props) {
    return (
        <>
            <Head title={props.headTitle} />

            <div className="min-h-screen bg-background flex flex-col gap-8 items-center sm:justify-center py-20 px-4">
                <AppToaster />
                <AppThemeToggle />

                <div>
                    <Link href="/">
                        <AppLogo className="h-20 w-20 fill-current text-primary" />
                    </Link>
                </div>

                {props.children}
            </div>
        </>
    );
}
