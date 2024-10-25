import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import React, { useId } from "react";

type InputProps = Pick<
    React.ComponentProps<"input">,
    "type" | "placeholder" | "value" | "onChange" | "disabled" | "required"
>;

type Props = {
    label: string;
    hiddenLabel?: boolean;
    error?: string;
} & InputProps &
    Pick<React.ComponentProps<"div">, "className">;

const defaultProps: Partial<Props> = {
    type: "text",
};

export default function AppInput(baseProps: Props) {
    let props = { ...defaultProps, ...baseProps } as const;

    const id = useId();

    return (
        <div className={`grid w-full gap-2 ${props.className}`}>
            <Label htmlFor={id} className={`${props.hiddenLabel && "sr-only"}`}>
                {props.label}{" "}
                {props.required && <span className="text-red-500">*</span>}
            </Label>

            <Input
                type={props.type}
                id={id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                className={`${props.error && "border-destructive"}`}
            />

            {props.error && (
                <p className="text-destructive text-xs">{props.error}</p>
            )}
        </div>
    );
}
