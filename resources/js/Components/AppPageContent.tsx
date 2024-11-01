import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

export default function AppPageContent(props: Props) {
    return <div className="grid gap-8">{props.children}</div>;
}
