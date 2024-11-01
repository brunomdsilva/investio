import AppPagination, { LaravelPagination } from "@/Components/AppPagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Badge } from "@/shadcn/components/ui/badge";
import { Button } from "@/shadcn/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shadcn/components/ui/table";
import { getInvestmentTypeLabel, getTransactionTypeLabel } from "@/utils/enums";
import { formatCurrency, formatDateTime } from "@/utils/helpers";
import TransactionFormModal from "./Partials/TransactionFormModal";

type Props = {
    transactions: LaravelPagination<App.Data.TransactionData>;
};

export default function Index(props: Props) {
    return (
        <AuthenticatedLayout headTitle="Transactions">
            <Card>
                <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>
                        Track and monitor your investment activities across all asset classes. You have made a total of{" "}
                        <span className="font-bold">{props.transactions.total}</span> transactions.
                        <TransactionFormModal>
                            <Button>Add Transaction</Button>
                        </TransactionFormModal>
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Asset</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-center">Type</TableHead>
                                <TableHead className="text-center">Quantity</TableHead>
                                <TableHead className="text-right">Unit Price</TableHead>
                                <TableHead className="text-right">Total Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {props.transactions.data.map((each, index) => (
                                <TableRow key={index}>
                                    <TableCell className="whitespace-nowrap">
                                        {formatDateTime(each.created_at)}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {each.investment.name}
                                        <span className="text-gray-500 text-sm ml-1">({each.investment.ticker})</span>
                                    </TableCell>
                                    <TableCell>{getInvestmentTypeLabel(each.investment.type)}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant={each.type === "buy" ? "success" : "destructive"}>
                                            {getTransactionTypeLabel(each.type)}
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
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
