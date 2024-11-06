declare namespace App.Data {
export type AssetData = {
typeLabel: string;
userHoldings?: number;
id?: number;
name: string;
ticker: string;
type: App.Enums.AssetTypeEnum;
current_value: number;
};
export type TransactionRequestData = {
user_id?: string;
asset_id?: string;
type: App.Enums.TransactionTypeEnum;
quantity?: string;
};
export type TransactionResourceData = {
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
