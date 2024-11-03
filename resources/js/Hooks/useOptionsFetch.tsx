import axios from "axios";
import { useEffect, useState } from "react";

type SelectableOption = {
    value: string | number | null;
    label: string;
};

function useOptionFetch(endpoint: string) {
    const [data, setData] = useState<SelectableOption[]>([]);
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
