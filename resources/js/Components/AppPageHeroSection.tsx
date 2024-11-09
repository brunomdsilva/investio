import { cn } from "@/shadcn/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
    title?: string;
    description?: string;
    className?: string;
} & PropsWithChildren;

export default function AppPageHeroSection(props: Props) {
    const shouldRenderHeader = props.title || props.description;

    return (
        <div className={cn("flex flex-col items-start gap-4 sm:flex-row sm:justify-between", props.className)}>
            {shouldRenderHeader && (
                <div className="flex flex-col gap-2">
                    {props.title && (
                        <h3 className="text-3xl font-semibold leading-none tracking-tight">{props.title}</h3>
                    )}
                    {props.description && <p className="text-muted-foreground">{props.description}</p>}
                </div>
            )}

            <div className="flex items-center gap-4">{props.children}</div>
        </div>
    );
}
