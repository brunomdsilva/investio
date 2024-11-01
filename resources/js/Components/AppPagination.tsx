import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shadcn/components/ui/pagination";
import { cn } from "@/shadcn/lib/utils";

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
        <Pagination className={cn("mt-8", className)}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        replace
                        preserveScroll
                        href={pagination.prev_page_url ?? "#"}
                        className={cn(
                            "[&_span]:sr-only px-3",
                            !pagination.prev_page_url && "pointer-events-none opacity-60"
                        )}
                    />
                </PaginationItem>

                {!pagination.next_page_url && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {pagination.prev_page_url && (
                    <PaginationItem>
                        <PaginationLink replace preserveScroll href={pagination.prev_page_url}>
                            {pagination.current_page - 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationLink replace preserveScroll href="#" isActive>
                        {pagination.current_page}
                    </PaginationLink>
                </PaginationItem>

                {pagination.next_page_url && (
                    <PaginationItem>
                        <PaginationLink replace preserveScroll href={pagination.next_page_url}>
                            {pagination.current_page + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                {!pagination.prev_page_url && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        replace
                        preserveScroll
                        href={pagination.next_page_url ?? "#"}
                        className={cn(
                            "[&_span]:sr-only px-3",
                            !pagination.next_page_url && "pointer-events-none opacity-60"
                        )}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
