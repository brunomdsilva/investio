import { Label } from "@/shadcn/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shadcn/components/ui/select";
import { cn } from "@/shadcn/lib/utils";
import { PropsWithChildren, useId } from "react";

type SingleOption = {
    label: string;
    value: string | number | null;
    groupItems?: never;
};

type GroupOption = {
    label: string;
    groupItems: SingleOption[];
    value?: never;
};

export type AppSelectOptions = (SingleOption | GroupOption)[];

type Props<T> = {
    className?: string;
    label: string;
    required?: boolean;
    hiddenLabel?: boolean;
    options?: AppSelectOptions | null;
    value?: T;
    onValueChange?: (value: T) => void;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
} & PropsWithChildren;

export default function AppSelect<T extends string>(props: Props<T>) {
    const id = useId();

    return (
        <div className={cn("grid content-start w-full gap-2", props.className)}>
            <Label htmlFor={id} className={cn(props.hiddenLabel && "sr-only")}>
                {props.label} {props.required && <span className="text-destructive">*</span>}
            </Label>

            <Select value={props.value} onValueChange={props.onValueChange} disabled={props.disabled}>
                <SelectTrigger id={id} className={cn(props.error && "border-destructive")}>
                    <SelectValue placeholder={props.placeholder ?? "Select"} />
                </SelectTrigger>

                <SelectContent>
                    {props.options?.map((each, index) => {
                        if (each.groupItems?.length) {
                            return (
                                <SelectGroup>
                                    <SelectLabel>{each.label}</SelectLabel>

                                    {each.groupItems.map((groupItem, groupItemIndex) => (
                                        <SelectItem
                                            key={groupItemIndex}
                                            value={groupItem.value?.toString() ?? ""}
                                            className="pl-10"
                                        >
                                            {groupItem.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            );
                        }

                        if (each.value) {
                            return (
                                <SelectItem key={index} value={each.value?.toString() ?? ""}>
                                    {each.label}
                                </SelectItem>
                            );
                        }
                    })}
                    {props.children}
                </SelectContent>
            </Select>

            {props.error && <p className="text-destructive text-xs">{props.error}</p>}
        </div>
    );
}
