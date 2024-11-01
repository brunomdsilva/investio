import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { ButtonProps, buttonVariants } from "@/shadcn/components/ui/button";
import { cn } from "@/shadcn/lib/utils";
import { Link } from "@inertiajs/react";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
    <nav role="navigation" aria-label="pagination" className={cn("", className)} {...props} />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
    ({ className, ...props }, ref) => (
        <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
    )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> &
    Pick<
        React.ComponentProps<typeof Link>,
        "className" | "disabled" | "href" | "onClick" | "preserveScroll" | "preserveState" | "replace"
    > &
    React.PropsWithChildren;

const PaginationLink = ({ className, isActive, disabled, size = "icon", ...props }: PaginationLinkProps) => (
    <Link
        aria-current={isActive ? "page" : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? "outline" : "ghost",
                size,
            }),
            disabled && "pointer-events-none opacity-60",
            className
        )}
        {...props}
    />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label="Go to previous page" size="icon" className={cn("", className)} {...props}>
        <ChevronLeft className="h-4 w-4" />
        {/* <span>Previous</span> */}
    </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label="Go to next page" size="icon" className={cn("", className)} {...props}>
        {/* <span>Next</span> */}
        <ChevronRight className="h-4 w-4" />
    </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
    <span aria-hidden className={cn("flex h-10 w-10 items-center justify-center", className)} {...props}>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};
