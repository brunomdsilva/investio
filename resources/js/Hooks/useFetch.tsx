import axios from "axios";
import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        axios(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                if (axios.isAxiosError(error) && error.response?.data?.message) {
                    return setError(error.response.data.message);
                }

                setError("An error occurred");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
