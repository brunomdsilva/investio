import AppCard from "@/Components/AppCard";
import AppPageHeroSection from "@/Components/AppPageHeroSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/shadcn/components/ui/button";
import { formatCurrency } from "@/utils/helpers";
import TransactionFormModal from "../Transactions/Partials/TransactionFormModal";
import { AssetsChart, AssetsChartData } from "./Partials/AssetsChart";
import { AssetTypesChart, AssetTypesChartData } from "./Partials/AssetTypesChart";

type Props = {
    totalHoldings: number;
    totalHoldingsValue: number;
    transactionsThisMonth: number;
    assetsChartData: AssetsChartData[];
    assetTypesChartData: AssetTypesChartData[];
};

export default function Dashboard(props: Props) {
    const displayCards = [
        {
            title: "Total Active Holdings",
            description: "The total number of assets currently held in your portfolio.",
            value: props.totalHoldings,
        },
        {
            title: "Total Holdings Value",
            description: "The total value of all assets currently held in your portfolio.",
            value: formatCurrency(props.totalHoldingsValue),
        },
        {
            title: "Transactions This Month",
            description: "Total transactions completed this month, including buys and sells.",
            value: props.transactionsThisMonth,
        },
    ];

    return (
        <AuthenticatedLayout headTitle="Dashboard">
            <AppPageHeroSection
                title="Dashboard"
                description="A personalized control panel providing an overview of investments, displaying assets, transactions, and the user's current holdings."
            >
                <TransactionFormModal>
                    <Button>Make Transaction</Button>
                </TransactionFormModal>
            </AppPageHeroSection>

            <div className="grid grid-cols-3 items-start gap-4">
                {displayCards.map((each, index) => (
                    <AppCard
                        key={index}
                        title={each.title}
                        description={each.description}
                        className="max-lg:col-span-full"
                    >
                        <p className="text-3xl tracking-wide font-semibold">{each.value}</p>
                    </AppCard>
                ))}

                <AppCard
                    title="Assets Value Distribution"
                    description="Shows the total value of each asset available in your portfolio."
                    className="col-span-full xl:col-span-2"
                >
                    <AssetsChart data={props.assetsChartData} />
                </AppCard>

                <AppCard
                    title="Asset Types Distribution"
                    description="Displays the distribution of asset types in your portfolio."
                    className="col-span-full md:col-span-2 xl:col-span-1"
                >
                    <AssetTypesChart data={props.assetTypesChartData} />
                </AppCard>
            </div>
        </AuthenticatedLayout>
    );
}
