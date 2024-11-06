import { AppSelectOptions } from "@/Components/Forms/AppSelect";
import axios from "axios";
import { useEffect, useState } from "react";

function useOptionFetch(endpoint: string) {
    const [data, setData] = useState<AppSelectOptions>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axios(endpoint)
            .then((response) => {
                setData(response.data);
            })
            .catch(() => {
                setData([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [endpoint]);

    return { data, loading };
}

export default useOptionFetch;
