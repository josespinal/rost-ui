import * as React from "react";

import { cn } from "./utils";

export type DataTablePaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (pageIndex: number) => void;
};

/**
 * Pagination component for data tables with page navigation and info display.
 *
 * @example
 * ```tsx
 * <DataTablePagination
 *   pageIndex={0}
 *   pageSize={10}
 *   totalCount={100}
 *   onPageChange={(page) => setPage(page)}
 * />
 * ```
 */
export function DataTablePagination({
  className,
  pageIndex,
  pageSize,
  totalCount,
  onPageChange,
  ...props
}: DataTablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const start = totalCount === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min(totalCount, (pageIndex + 1) * pageSize);

  return (
    <div className={cn("rost-data-table__pagination", className)} {...props}>
      <span className="rost-data-table__pagination-info">
        Showing {start}-{end} of {totalCount}
      </span>
      <div className="rost-data-table__pagination-controls">
        <button
          type="button"
          className="rost-data-table__pagination-button"
          onClick={() => onPageChange(Math.max(0, pageIndex - 1))}
          disabled={pageIndex === 0}
        >
          Previous
        </button>
        <span className="rost-data-table__pagination-page">
          Page {pageIndex + 1} of {totalPages}
        </span>
        <button
          type="button"
          className="rost-data-table__pagination-button"
          onClick={() => onPageChange(Math.min(totalPages - 1, pageIndex + 1))}
          disabled={pageIndex >= totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
