import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import React, { useId } from "react";

type ReactInputProps = React.ComponentProps<"input">;

type InputProps = {
    type?: ReactInputProps["type"];
    placeholder?: ReactInputProps["placeholder"];
    value?: ReactInputProps["value"];
    onChange?: ReactInputProps["onChange"];
};

type Props = {
    label: string;
    hiddenLabel?: boolean;
    error?: string;
    className?: React.ComponentProps<"div">["className"];
} & InputProps;

const defaultProps: Partial<Props> = {
    type: "text",
};

export default function AppInput(baseProps: Props) {
    let props = { ...defaultProps, ...baseProps } as const;

    const id = useId();

    return (
        <div className={`grid w-full gap-1.5 ${props.className}`}>
            <Label htmlFor={id} className={`${props.hiddenLabel && "sr-only"}`}>
                {props.label}
            </Label>

            <Input
                type={props.type}
                id={id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />

            {props.error && (
                <p className="text-red-500 text-sm">{props.error}</p>
            )}
        </div>
    );
}
