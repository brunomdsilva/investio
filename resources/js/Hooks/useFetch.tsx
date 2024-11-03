import axios from "axios";
import { useEffect, useState } from "react";

function useFetch<T>(endpoint: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        axios(endpoint)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                axios.isAxiosError(error) && error.response?.data?.message
                    ? setError(error.response.data.message)
                    : setError("An error occurred");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [endpoint]);

    return { data, loading, error };
}

export default useFetch;
