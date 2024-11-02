type TransactionTypeEnum = App.Enums.TransactionTypeEnum;
type AssetTypeEnum = App.Enums.AssetTypeEnum;

export function getTransactionTypeLabel(type: TransactionTypeEnum) {
    const types: Record<TransactionTypeEnum, string> = {
        buy: "Buy",
        sell: "Sell",
    };
    return types[type];
}

export function getAssetTypeLabel(type: AssetTypeEnum) {
    const types: Record<AssetTypeEnum, string> = {
        crypto: "Cryptocurrency",
        stock: "Stock",
        real_estate: "Real Estate",
        bond: "Bond",
    };
    return types[type];
}

export const assetTypeOptions: { label: string; value: AssetTypeEnum }[] = [
    { value: "crypto", label: getAssetTypeLabel("crypto") },
    { value: "stock", label: getAssetTypeLabel("stock") },
    { value: "real_estate", label: getAssetTypeLabel("real_estate") },
    { value: "bond", label: getAssetTypeLabel("bond") },
];

export const transactionTypeOptions: { label: string; value: TransactionTypeEnum }[] = [
    { value: "buy", label: getTransactionTypeLabel("buy") },
    { value: "sell", label: getTransactionTypeLabel("sell") },
];
