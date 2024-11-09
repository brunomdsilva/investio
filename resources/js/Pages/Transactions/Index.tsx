import AppPageHeroSection from "@/Components/AppPageHeroSection";
import AppPagination, { LaravelPagination } from "@/Components/AppPagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Badge } from "@/shadcn/components/ui/badge";
import { Button } from "@/shadcn/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shadcn/components/ui/table";
import { formatCurrency, formatDateTime } from "@/utils/helpers";
import TransactionFormModal from "./Partials/TransactionFormModal";

type Props = {
    transactions: LaravelPagination<App.Data.TransactionResourceData>;
};

export default function Index(props: Props) {
    return (
        <AuthenticatedLayout headTitle="Transactions">
            <AppPageHeroSection
                title="Transactions"
                description="A record of all buy and sell transactions made by the user, with details and dates for each movement."
            >
                <TransactionFormModal>
                    <Button>Add Transaction</Button>
                </TransactionFormModal>
            </AppPageHeroSection>

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
