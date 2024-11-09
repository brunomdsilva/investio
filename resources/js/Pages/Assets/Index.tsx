import AppPageHeroSection from "@/Components/AppPageHeroSection";
import AppPagination, { LaravelPagination } from "@/Components/AppPagination";
import AppInput from "@/Components/Forms/AppInput";
import useSearch from "@/Hooks/useSearch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Badge } from "@/shadcn/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shadcn/components/ui/table";
import { formatCurrency } from "@/utils/helpers";
import TransactionFormModal from "../Transactions/Partials/TransactionFormModal";

type Props = {
    assets: LaravelPagination<App.Data.AssetResourceData>;
    search?: string;
};

export default function Index(props: Props) {
    const { searchValue, setSearchValue } = useSearch(props.search);

    return (
        <AuthenticatedLayout headTitle="Assets">
            <AppPageHeroSection
                title="Assets"
                description="Explore available assets for investment, including stocks, cryptocurrencies, and other financial products with detailed information."
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
        </AuthenticatedLayout>
    );
}
