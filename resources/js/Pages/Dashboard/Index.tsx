import AppCard from "@/Components/AppCard";
import AppPageHeroSection from "@/Components/AppPageHeroSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatCurrency } from "@/utils/helpers";

type Props = {
    totalHoldings: number;
    totalHoldingsValue: number;
    transactionsThisMonth: number;
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
            />

            <div className="grid grid-cols-3 gap-4">
                {displayCards.map((each, index) => (
                    <AppCard key={index} title={each.title} description={each.description}>
                        <p className="text-3xl tracking-wide font-semibold">{each.value}</p>
                    </AppCard>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
