import useFetch from "@/Hooks/useFetch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";

export default function Dashboard() {
    const fetchAssetOptions = useFetch<App.Data.AssetData[]>(route("assets.get"));

    return (
        <AuthenticatedLayout headTitle="Dashboard">
            <div className="space-y-4">
                <p>DASHBOARD</p>

                <div className="p-10 border">
                    <p>Dashboard content goes here</p>

                    <div>{fetchAssetOptions.loading ? "loading" : "done"}</div>
                    <div>{fetchAssetOptions.error}</div>

                    {fetchAssetOptions.data?.map((each, index) => (
                        <div key={index}>{each.name}</div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
