import { router } from "@inertiajs/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { route } from "ziggy-js";
import useDebounce from "./useDebounce";

export default function useSearch(initialSearch?: string) {
    const routeInfo = useMemo(
        () => ({
            name: route().current()!,
            params: route().params,
        }),
        []
    );

    const [searchValue, setSearchValue] = useState(initialSearch);
    const debouncedSearchValue = useDebounce(searchValue, 600);

    const handleSearch = useCallback(() => {
        router.get(
            route(routeInfo.name),
            { ...routeInfo.params, search: debouncedSearchValue },
            { preserveState: true, preserveScroll: true }
        );
    }, [debouncedSearchValue, routeInfo.name, routeInfo.params]);

    useEffect(() => {
        const sameSearch = debouncedSearchValue === initialSearch;
        const emptySearch = !debouncedSearchValue && !initialSearch;

        if (sameSearch || emptySearch) {
            return;
        }

        handleSearch();
    }, [debouncedSearchValue, initialSearch, handleSearch]);

    return { searchValue, setSearchValue };
}
