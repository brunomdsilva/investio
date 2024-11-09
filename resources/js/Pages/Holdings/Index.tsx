import AppPageHeroSection from "@/Components/AppPageHeroSection";
import AppPagination, { LaravelPagination } from "@/Components/AppPagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Badge } from "@/shadcn/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shadcn/components/ui/table";
import { formatCurrency } from "@/utils/helpers";

type Props = {
    holdings: LaravelPagination<App.Data.HoldingsResourceData>;
};

export default function Index(props: Props) {
    return (
        <AuthenticatedLayout headTitle="Holdings">
            <AppPageHeroSection
                title="Holdings"
                description="An overview of the assets currently held by the user, with performance data and market value."
            />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Asset</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-center">Owned Quantity</TableHead>
                        <TableHead className="text-right">Total Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.holdings.data.map((each, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">
                                {each.asset.name} <span className="text-muted-foreground">({each.asset.ticker})</span>
                            </TableCell>
                            <TableCell>
                                <Badge style={{ backgroundColor: each.asset.typeColor }}>{each.asset.typeLabel}</Badge>
                            </TableCell>
                            <TableCell className="text-center">
                                <Badge variant="secondary">{each.owned_quantity}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                {formatCurrency(each.owned_quantity * each.asset.current_value)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <AppPagination pagination={props.holdings} />
        </AuthenticatedLayout>
    );
}
