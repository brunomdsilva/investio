import { Card, CardDescription, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
    title?: ReactNode;
    description?: ReactNode;
} & PropsWithChildren;

export default function AppCard(props: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
        </Card>
    );
}
