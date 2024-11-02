declare namespace App.Data {
export type InvestmentData = {
name: string;
ticker: string;
current_value: number;
type: App.Enums.InvestmentTypeEnum;
};
export type TransactionData = {
investment: App.Data.InvestmentData;
type: App.Enums.TransactionTypeEnum;
quantity: number;
unit_value: number;
total_value: number;
created_at: string;
};
}
declare namespace App.Enums {
export type InvestmentTypeEnum = 'crypto' | 'stock' | 'real_estate' | 'bond';
export type TransactionTypeEnum = 'buy' | 'sell';
}
