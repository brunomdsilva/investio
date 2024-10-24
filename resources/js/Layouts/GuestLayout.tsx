import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

type Props = {
    head?: string;
} & PropsWithChildren;

export default function GuestLayout({ head, children }: Props) {
    return (
        <>
            <Head title={head} />

            <div className="min-h-screen bg-background flex flex-col gap-8 items-center sm:justify-center py-20 px-4">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                    </Link>
                </div>

                {children}
            </div>
        </>
    );
}
