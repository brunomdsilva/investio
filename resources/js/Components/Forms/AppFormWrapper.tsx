import { ComponentProps, PropsWithChildren } from "react";

type Props = {
    formId: string;
    className?: string;
    onSubmit: ComponentProps<"form">["onSubmit"];
} & PropsWithChildren;

export default function AppFormWrapper(props: Props) {
    return (
        <form id={props.formId} onSubmit={props.onSubmit} className={`grid gap-5 ${props.className}`}>
            {props.children}
        </form>
    );
}
