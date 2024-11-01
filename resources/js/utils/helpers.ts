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
