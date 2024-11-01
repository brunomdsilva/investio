import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shadcn/components/ui/pagination";
import { cn } from "@/shadcn/lib/utils";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

type LaravelPaginationLink = {
    url: string;
    label: string;
    active: boolean;
};

export type LaravelPagination<T> = {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: LaravelPaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

type Props = {
    pagination: LaravelPagination<unknown>;
    className?: string;
};

export default function AppPagination({ pagination, className }: Props) {
    return (
        <div className={cn("w-full flex flex-col items-center gap-4 justify-between sm:flex-row", className)}>
            <p className="text-sm text-muted-foreground">
                Showing {pagination.from} to {pagination.to} of {pagination.total} entries
            </p>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink
                            replace
                            preserveScroll
                            disabled={!pagination.prev_page_url}
                            href={pagination.first_page_url ?? "#"}
                        >
                            <ChevronsLeft />
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationPrevious
                            replace
                            preserveScroll
                            disabled={!pagination.prev_page_url}
                            href={pagination.prev_page_url ?? "#"}
                        />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink replace preserveScroll href="#" isActive>
                            {pagination.current_page}
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext
                            replace
                            preserveScroll
                            disabled={!pagination.next_page_url}
                            href={pagination.next_page_url ?? "#"}
                        />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink
                            replace
                            preserveScroll
                            disabled={!pagination.next_page_url}
                            href={pagination.last_page_url ?? "#"}
                        >
                            <ChevronsRight />
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
