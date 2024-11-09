import AppPageHeroSection from "@/Components/AppPageHeroSection";
import AppPagination, { LaravelPagination } from "@/Components/AppPagination";
import AppInput from "@/Components/Forms/AppInput";
import useSearch from "@/Hooks/useSearch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Badge } from "@/shadcn/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shadcn/components/ui/table";
import { formatCurrency, formatDateTime } from "@/utils/helpers";
import TransactionFormModal from "./Partials/TransactionFormModal";

type Props = {
    transactions: LaravelPagination<App.Data.TransactionResourceData>;
    search?: string;
};

export default function Index(props: Props) {
    const { searchValue, setSearchValue } = useSearch(props.search);

    return (
        <AuthenticatedLayout headTitle="Transactions">
            <AppPageHeroSection
                title="Transactions"
                description="A record of all buy and sell transactions made by the user, with details and dates for each movement."
            >
                <TransactionFormModal />
            </AppPageHeroSection>

            <AppInput
                label="Search"
                placeholder="Search assets..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus={Boolean(props.search)}
                className="max-w-xs"
            />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Asset</TableHead>
                        <TableHead className="text-center">Transaction</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-right">Unit Price</TableHead>
                        <TableHead className="text-right">Total Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.transactions.data.map((each, index) => (
                        <TableRow key={index}>
                            <TableCell className="whitespace-nowrap">{formatDateTime(each.created_at)}</TableCell>
                            <TableCell className="font-medium">
                                {each.asset.name} <span className="text-muted-foreground">({each.asset.ticker})</span>
                            </TableCell>
                            <TableCell className="text-center">
                                <Badge variant={each.type === "buy" ? "success" : "destructive"}>
                                    {each.typeLabel}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                                <Badge variant="secondary">{each.quantity}</Badge>
                            </TableCell>
                            <TableCell className="text-right">{formatCurrency(each.unit_value)}</TableCell>
                            <TableCell className="text-right">{formatCurrency(each.total_value)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <AppPagination pagination={props.transactions} />
        </AuthenticatedLayout>
    );
}
