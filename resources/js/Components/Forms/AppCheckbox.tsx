import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { Label } from "@/shadcn/components/ui/label";
import React, { useId } from "react";

type ReactInputProps = Pick<
    React.ComponentProps<typeof Checkbox>,
    "checked" | "onCheckedChange"
>;

type Props = {
    label?: string;
    description?: string;
} & ReactInputProps;

export default function AppCheckbox(props: Props) {
    const id = useId();

    return (
        <div className="flex items-start gap-2">
            <Checkbox
                id={id}
                checked={props.checked}
                onCheckedChange={props.onCheckedChange}
                className={`rounded border-input ${
                    props.checked && "border-primary"
                }`}
            />

            <div className="grid gap-1.5 leading-none">
                {props.label && (
                    <Label className="pt-0.5" htmlFor={id}>
                        {props.label}
                    </Label>
                )}

                {props.description && (
                    <p className="text-sm text-muted-foreground">
                        {props.description}
                    </p>
                )}
            </div>
        </div>
    );
}
