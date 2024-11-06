import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import AppSelect from "@/Components/Forms/AppSelect";
import useFetch from "@/Hooks/useFetch";
import useOptionFetch from "@/Hooks/useOptionsFetch";
import { formatCurrency } from "@/utils/helpers";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { route } from "ziggy-js";

type Props = {
    formId: string;
    onSuccessfulSubmit?: () => void;
};

export default function TransactionForm(props: Props) {
    const assets = useFetch<App.Data.AssetData[]>(route("assets.get"));

    const assetOptions = useOptionFetch(route("options.assets"));
    const transactionTypeOptions = useOptionFetch(route("options.transaction-types"));

    const form = useForm<App.Data.TransactionRequestData>({
        asset_id: "",
        type: "buy",
        quantity: "",
    });

    const selectedAsset = assets.data?.find((each) => {
        return Number(each.id) === Number(form.data.asset_id);
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("transactions.store"), {
            onSuccess: () => {
                props.onSuccessfulSubmit?.();
            },
        });
    }

    const canComputeValues = selectedAsset && Number(form.data.quantity) > 0;
    const computedUnitPrice = canComputeValues ? formatCurrency(selectedAsset.current_value) : "";
    const computedTotalAmount = canComputeValues
        ? formatCurrency(selectedAsset.current_value * Number(form.data.quantity))
        : "";

    return (
        <AppFormWrapper onSubmit={submit} formId={props.formId} className="grid-cols-2">
            <AppSelect
                required
                disabled={assetOptions.loading}
                options={assetOptions.data}
                label="Asset"
                value={form.data.asset_id}
                onValueChange={(value) => form.setData("asset_id", value)}
                error={form.errors.asset_id}
                className="col-span-full"
            />
            <AppSelect
                required
                disabled={transactionTypeOptions.loading}
                options={transactionTypeOptions.data}
                label="Transaction type"
                value={form.data.type}
                onValueChange={(value) => form.setData("type", value)}
                error={form.errors.type}
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
                disabled
                label="Unit price"
                placeholder={formatCurrency(10)}
                value={computedUnitPrice}
                className="col-span-full"
            />
            <AppInput
                disabled
                label="Total amount"
                placeholder={formatCurrency(9990)}
                value={computedTotalAmount}
                className="col-span-full"
            />
        </AppFormWrapper>
    );
}
