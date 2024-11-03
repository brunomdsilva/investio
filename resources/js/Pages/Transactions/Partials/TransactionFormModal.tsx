import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import AppSelect from "@/Components/Forms/AppSelect";
import useOptionFetch from "@/Hooks/useOptionsFetch";
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
import { formatCurrency } from "@/utils/helpers";
import { useForm } from "@inertiajs/react";
import { FormEvent, PropsWithChildren, useId } from "react";
import { route } from "ziggy-js";

export default function TransactionFormModal(props: PropsWithChildren) {
    const formId = useId();

    const transactionTypeOptions = useOptionFetch(route("options.transaction-types"));
    const defaultTransactionTypeOption: App.Enums.TransactionTypeEnum = "buy";

    const assetOptions = useOptionFetch(route("options.assets"));

    const form = useForm({
        asset: "",
        type: defaultTransactionTypeOption.toString(),
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

                <AppFormWrapper onSubmit={submit} formId={formId} className="grid-cols-2">
                    <AppSelect
                        required
                        disabled={assetOptions.loading}
                        options={assetOptions.data}
                        label="Asset"
                        value={form.data.asset}
                        onValueChange={(value) => form.setData("asset", value)}
                        className="col-span-full"
                    />
                    <AppSelect
                        required
                        disabled={transactionTypeOptions.loading}
                        options={transactionTypeOptions.data}
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
                    <AppInput
                        type="number"
                        disabled
                        label="Unit price"
                        placeholder={formatCurrency(10)}
                        className="col-span-full"
                    />

                    <AppInput
                        type="number"
                        disabled
                        label="Total amount"
                        placeholder={formatCurrency(9990)}
                        className="col-span-full"
                    />
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
