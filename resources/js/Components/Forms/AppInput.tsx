import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { cn } from "@/shadcn/lib/utils";
import { ComponentProps, ForwardedRef, forwardRef, useId } from "react";

type AppInputTypes =
    | "number"
    | "password"
    | "search"
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

type Props = {
    className?: string;
    label: string;
    hiddenLabel?: boolean;
    placeholder?: string;
    error?: string;
    type?: AppInputTypes;
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    onChange?: ComponentProps<"input">["onChange"];
    value?: ComponentProps<"input">["value"];
};

function AppInput(baseProps: Props, ref: ForwardedRef<HTMLInputElement>) {
    const propsWithDefaults: Partial<Props> = {
        type: "text",
        placeholder: baseProps.type === "password" ? "••••" : undefined,
    };

    let props = { ...propsWithDefaults, ...baseProps } as const;

    const id = useId();

    return (
        <div className={cn("grid w-full gap-2", props.className)}>
            <Label htmlFor={id} className={cn(props.hiddenLabel && "sr-only")}>
                {props.label} {props.required && <span className="text-red-500">*</span>}
            </Label>

            <Input
                id={id}
                ref={ref}
                type={props.type}
                autoFocus={props.autoFocus}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                className={cn(props.error && "border-destructive")}
            />

            {props.error && <p className="text-destructive text-xs">{props.error}</p>}
        </div>
    );
}

export default forwardRef(AppInput);
