import { route } from "ziggy-js";

export function isCurrentRoute(routeNameOrUrl: string): boolean {
    const currentRouteName = route().current();
    const currentRoutePath = currentRouteName && route(currentRouteName, route().params);

    if (currentRouteName === routeNameOrUrl) {
        return true;
    }

    return currentRoutePath === routeNameOrUrl;
}
