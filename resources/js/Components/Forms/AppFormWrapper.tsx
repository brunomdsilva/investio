import React, { PropsWithChildren } from "react";

type Props = Pick<
    React.ComponentProps<"form">,
    "id" | "onSubmit" | "className"
> &
    PropsWithChildren;

export default function AppFormWrapper(props: Props) {
    return (
        <form
            id={props.id}
            onSubmit={props.onSubmit}
            className={`grid gap-5 ${props.className}`}
        >
            {props.children}
        </form>
    );
}
