import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { PropsWithChildren } from "react";

type Props = {
    title: string;
    description?: string;
} & PropsWithChildren;

export default function AppCard(props: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                {props.description && <CardDescription>{props.description}</CardDescription>}
            </CardHeader>

            <CardContent>{props.children}</CardContent>
        </Card>
    );
}
