import useFetch from "@/Hooks/useFetch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";

export default function Dashboard() {
    const fetchInvestmentOptions = useFetch<App.Data.InvestmentData[]>(route("investments.get"));

    return (
        <AuthenticatedLayout headTitle="Dashboard">
            <div className="space-y-4">
                <p>DASHBOARD</p>

                <div className="p-10 border">
                    <p>Dashboard content goes here</p>

                    <div>{fetchInvestmentOptions.loading ? "loading" : "done"}</div>
                    <div>{fetchInvestmentOptions.error}</div>

                    {fetchInvestmentOptions.data?.map((each, index) => (
                        <div key={index}>{each.name}</div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
