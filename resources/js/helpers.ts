import { route } from "ziggy-js";

export function getCurrentRoute(): string | null {
    const currentRouteName = route().current();

    return currentRouteName ? route(currentRouteName, route().params) : null;
}
