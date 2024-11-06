import AppPageContent from "@/Components/AppPageContent";
import AppPageContentHero from "@/Components/AppPageContentHero";
import AppPagination, { LaravelPagination } from "@/Components/AppPagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Badge } from "@/shadcn/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shadcn/components/ui/table";
import { formatCurrency } from "@/utils/helpers";

type Props = {
    assets: LaravelPagination<App.Data.AssetResourceData>;
};

export default function Index(props: Props) {
    return (
        <AuthenticatedLayout headTitle="Assets">
            <AppPageContent>
                <AppPageContentHero title="Assets" />

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className="text-center">Ticker</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Current Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.assets.data.map((each, index) => (
                            <TableRow key={index}>
                                <TableCell>{each.name}</TableCell>
                                <TableCell className="text-center">
                                    <Badge variant="secondary">{each.ticker}</Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge style={{ backgroundColor: each.typeColor }}>{each.typeLabel}</Badge>
                                </TableCell>
                                <TableCell className="text-right">{formatCurrency(each.current_value)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <AppPagination pagination={props.assets} />
            </AppPageContent>
        </AuthenticatedLayout>
    );
}
