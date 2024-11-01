type TransactionTypeEnum = App.Enums.TransactionTypeEnum;
type InvestmentTypeEnum = App.Enums.InvestmentTypeEnum;

export function getTransactionTypeLabel(type: TransactionTypeEnum) {
    const types: Record<TransactionTypeEnum, string> = {
        buy: "Buy",
        sell: "Sell",
    };
    return types[type];
}

export function getInvestmentTypeLabel(type: InvestmentTypeEnum) {
    const types: Record<InvestmentTypeEnum, string> = {
        crypto: "Cryptocurrency",
        stock: "Stock",
        real_estate: "Real Estate",
        bond: "Bond",
    };
    return types[type];
}

export const investmentTypeOptions: { label: string; value: InvestmentTypeEnum }[] = [
    { value: "crypto", label: getInvestmentTypeLabel("crypto") },
    { value: "stock", label: getInvestmentTypeLabel("stock") },
    { value: "real_estate", label: getInvestmentTypeLabel("real_estate") },
    { value: "bond", label: getInvestmentTypeLabel("bond") },
];

export const transactionTypeOptions: { label: string; value: TransactionTypeEnum }[] = [
    { value: "buy", label: getTransactionTypeLabel("buy") },
    { value: "sell", label: getTransactionTypeLabel("sell") },
];
