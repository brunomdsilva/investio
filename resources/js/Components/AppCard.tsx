import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { PropsWithChildren } from "react";

type Props = {
    title?: string;
    description?: string;
    className?: string;
} & PropsWithChildren;

export default function AppCard(props: Props) {
    const canShowHeader = props.title || props.description;

    return (
        <Card className={props.className}>
            {canShowHeader && (
                <CardHeader>
                    {props.title && <CardTitle>{props.title}</CardTitle>}
                    {props.description && <CardDescription>{props.description}</CardDescription>}
                </CardHeader>
            )}

            <CardContent className={`${!canShowHeader && "pt-6"}`}>{props.children}</CardContent>
        </Card>
    );
}
