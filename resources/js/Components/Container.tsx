import React, { PropsWithChildren } from "react";

type Props = React.ComponentProps<"div"> & PropsWithChildren;

export default function Container({ children, className }: Props) {
    return (
        <div className={`w-full max-w-7xl px-4 mx-auto ${className}`}>
            {children}
        </div>
    );
}
