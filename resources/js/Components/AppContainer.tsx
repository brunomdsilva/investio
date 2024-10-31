import { PropsWithChildren } from "react";

type Props = {
    className?: string;
} & PropsWithChildren;

export default function AppContainer(props: Props) {
    return <div className={`w-full max-w-7xl px-4 mx-auto ${props.className}`}>{props.children}</div>;
}
