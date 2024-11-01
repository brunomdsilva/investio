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
import { ComponentProps, PropsWithChildren, useId } from "react";

type SingleOption = {
    label: string;
    value: string;
    groupItems?: never;
};

type GroupOption = {
    label: string;
    groupItems: SingleOption[];
    value?: never;
};

type AppSelectOption = SingleOption | GroupOption;

export type AppSelectOptions = AppSelectOption[];

type Props = {
    className?: string;
    label: string;
    required?: boolean;
    hiddenLabel?: boolean;
    options?: AppSelectOptions;
    value?: ComponentProps<typeof Select>["value"];
    onValueChange?: ComponentProps<typeof Select>["onValueChange"];
    placeholder?: string;
} & PropsWithChildren;

export default function AppSelect(props: Props) {
    const id = useId();

    return (
        <div className={cn("grid w-full gap-2", props.className)}>
            <Label htmlFor={id} className={cn(props.hiddenLabel && "sr-only")}>
                {props.label} {props.required && <span className="text-red-500">*</span>}
            </Label>

            <Select value={props.value} onValueChange={props.onValueChange}>
                <SelectTrigger id={id}>
                    <SelectValue placeholder={props.placeholder ?? "Select"} />
                </SelectTrigger>

                <SelectContent>
                    {props.options?.map((each, index) =>
                        each.groupItems ? (
                            <SelectGroup>
                                <SelectLabel>{each.label}</SelectLabel>

                                {each.groupItems.map((groupItem, groupItemIndex) => (
                                    <SelectItem key={groupItemIndex} value={groupItem.value} className="pl-10">
                                        {groupItem.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        ) : (
                            <SelectItem key={index} value={each.value}>
                                {each.label}
                            </SelectItem>
                        )
                    )}
                    {props.children}
                </SelectContent>
            </Select>
        </div>
    );
}
