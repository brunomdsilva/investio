import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import AppSelect from "@/Components/Forms/AppSelect";
import useFetch from "@/Hooks/useFetch";
import { Button } from "@/shadcn/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { transactionTypeOptions } from "@/utils/enums";
import { formatCurrency } from "@/utils/helpers";
import { useForm } from "@inertiajs/react";
import { FormEvent, PropsWithChildren, useId } from "react";
import { route } from "ziggy-js";

type Props = {
    // TODO add assets here from the backend
} & PropsWithChildren;

export default function TransactionFormModal(props: Props) {
    const fetchAssetOptions = useFetch<App.Data.AssetData[]>(route("assets.get"));

    const formId = useId();

    const form = useForm({
        asset: "",
        type: transactionTypeOptions[0].value as string,
        quantity: "",
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("transactions.store"));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                    <DialogDescription>Add a new transaction to your asset portfolio.</DialogDescription>
                </DialogHeader>

                <AppFormWrapper onSubmit={submit} formId={formId}>
                    <AppSelect
                        required
                        // options={fetchAssetOptions.data}
                        label="Transaction type"
                        value={form.data.type}
                        onValueChange={(value) => form.setData("type", value)}
                    />
                    <AppInput
                        required
                        type="number"
                        value={form.data.quantity}
                        onChange={(e) => form.setData("quantity", e.target.value)}
                        error={form.errors.quantity}
                        label="Quantity"
                        placeholder="999"
                    />
                    <AppInput type="number" disabled label="Unit price" placeholder={formatCurrency(10)} />
                    <AppInput type="number" disabled label="Total amount" placeholder={formatCurrency(9990)} />
                </AppFormWrapper>

                <DialogFooter>
                    <Button type="submit" form={formId}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
