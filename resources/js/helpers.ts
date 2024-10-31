import { route } from "ziggy-js";

export function isCurrentRoute(routeNameOrUrl: string): boolean {
    const currentRouteName = route().current();
    const currentRoutePath = currentRouteName && route(currentRouteName, route().params).split("?")[0];
    const routeNameOrUrlPath = routeNameOrUrl.split("?")[0];

    if (currentRouteName === routeNameOrUrl) {
        return true;
    }

    return currentRoutePath === routeNameOrUrlPath;
}

export function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(value);
}

export function formatDateTime(value: string) {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
}

export function getTransactionTypeColor(type: App.Enums.TransactionTypeEnum) {
    return type === "buy" ? "text-green-600" : "text-red-600";
}

export function getTransactionTypeLabel(type: App.Enums.TransactionTypeEnum) {
    const types: Record<App.Enums.TransactionTypeEnum, string> = {
        buy: "Buy",
        sell: "Sell",
    };
    return types[type];
}

export function getInvestmentTypeLabel(type: App.Enums.InvestmentTypeEnum) {
    const types: Record<App.Enums.InvestmentTypeEnum, string> = {
        crypto: "Cryptocurrency",
        stock: "Stock",
        real_estate: "Real Estate",
        bond: "Bond",
    };
    return types[type];
}
