declare namespace App.Data {
export type AssetData = {
typeLabel: string;
name: string;
ticker: string;
current_value: number;
type: App.Enums.AssetTypeEnum;
};
export type TransactionData = {
typeLabel: string;
asset: App.Data.AssetData;
type: App.Enums.TransactionTypeEnum;
quantity: number;
unit_value: number;
total_value: number;
created_at: string;
};
}
declare namespace App.Enums {
export type AssetTypeEnum = 'crypto' | 'stock' | 'real_estate' | 'bond';
export type TransactionTypeEnum = 'buy' | 'sell';
}
