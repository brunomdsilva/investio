import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
    title: string;
    description?: ReactNode;
    formId: string;
    formProcessing: boolean;
    submitLabel: string;
    secondaryAction?: {
        label: string;
        href: React.ComponentProps<typeof Link>["href"];
        method?: React.ComponentProps<typeof Link>["method"];
        as?: React.ComponentProps<typeof Link>["as"];
        condition?: boolean;
    };
} & PropsWithChildren;

export default function AuthCard(props: Props) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                {props.description && (
                    <CardDescription>{props.description}</CardDescription>
                )}
            </CardHeader>

            <CardContent>{props.children}</CardContent>

            <CardFooter className="flex justify-end gap-2">
                {props.secondaryAction && (
                    <Button variant="link" asChild>
                        <Link
                            href={props.secondaryAction.href}
                            method={props.secondaryAction.method}
                            as={props.secondaryAction.as}
                        >
                            {props.secondaryAction.label}
                        </Link>
                    </Button>
                )}

                <Button form={props.formId} disabled={props.formProcessing}>
                    {props.submitLabel}
                </Button>
            </CardFooter>
        </Card>
    );
}