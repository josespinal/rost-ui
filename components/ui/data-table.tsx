import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { DataTablePagination } from "./data-table-pagination";
import { cn } from "./utils";

export type SortDirection = "asc" | "desc";

export type DataTableSort<TData> = {
  key: keyof TData;
  direction: SortDirection;
};

export type DataTableColumn<TData> = {
  header: React.ReactNode;
  accessor?: keyof TData;
  sortKey?: keyof TData;
  sortable?: boolean;
  sortValue?: (row: TData) => string | number;
  cell?: (row: TData) => React.ReactNode;
  className?: string;
  headerClassName?: string;
};

export type DataTableProps<TData> = React.HTMLAttributes<HTMLDivElement> & {
  data: TData[];
  columns: Array<DataTableColumn<TData>>;
  emptyMessage?: React.ReactNode;
  sort?: DataTableSort<TData> | null;
  defaultSort?: DataTableSort<TData> | null;
  onSortChange?: (sort: DataTableSort<TData> | null) => void;
  pageSize?: number;
  pageIndex?: number;
  defaultPageIndex?: number;
  onPageChange?: (pageIndex: number) => void;
  showPagination?: boolean;
};

/**
 * Complete data table component with sorting, pagination, and empty states.
 * Composes table primitives with pagination functionality.
 *
 * @example
 * ```tsx
 * <DataTable
 *   data={users}
 *   columns={columns}
 *   pageSize={10}
 *   defaultSort={{ key: "name", direction: "asc" }}
 * />
 * ```
 */
export function DataTable<TData>({
  className,
  data,
  columns,
  emptyMessage = "No data available",
  sort,
  defaultSort = null,
  onSortChange,
  pageSize,
  pageIndex,
  defaultPageIndex = 0,
  onPageChange,
  showPagination = true,
  ...props
}: DataTableProps<TData>) {
  const [internalSort, setInternalSort] = React.useState<DataTableSort<TData> | null>(
    defaultSort
  );
  const [internalPageIndex, setInternalPageIndex] = React.useState(defaultPageIndex);

  const resolvedSort = sort ?? internalSort;
  const resolvedPageIndex = pageIndex ?? internalPageIndex;

  const sortedData = React.useMemo(() => {
    if (!resolvedSort) return data;
    const column = columns.find((item) =>
      [item.sortKey, item.accessor].includes(resolvedSort.key)
    );
    const getValue = column?.sortValue ?? ((row: TData) => row[resolvedSort.key]);

    return [...data].sort((left, right) => {
      const leftValue = getValue(left);
      const rightValue = getValue(right);

      if (typeof leftValue === "number" && typeof rightValue === "number") {
        return resolvedSort.direction === "asc"
          ? leftValue - rightValue
          : rightValue - leftValue;
      }

      const leftString = String(leftValue ?? "");
      const rightString = String(rightValue ?? "");
      return resolvedSort.direction === "asc"
        ? leftString.localeCompare(rightString)
        : rightString.localeCompare(leftString);
    });
  }, [columns, data, resolvedSort]);

  const totalPages = pageSize ? Math.max(1, Math.ceil(sortedData.length / pageSize)) : 1;
  const clampedPageIndex = Math.min(Math.max(resolvedPageIndex, 0), totalPages - 1);

  React.useEffect(() => {
    if (pageIndex === undefined && clampedPageIndex !== resolvedPageIndex) {
      setInternalPageIndex(clampedPageIndex);
    }
  }, [clampedPageIndex, pageIndex, resolvedPageIndex]);

  const pagedData = React.useMemo(() => {
    if (!pageSize) return sortedData;
    const start = clampedPageIndex * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [clampedPageIndex, pageSize, sortedData]);

  const handleSortChange = (nextSort: DataTableSort<TData> | null) => {
    if (onSortChange) {
      onSortChange(nextSort);
      return;
    }
    setInternalSort(nextSort);
  };

  const handlePageChange = (nextPageIndex: number) => {
    if (onPageChange) {
      onPageChange(nextPageIndex);
      return;
    }
    setInternalPageIndex(nextPageIndex);
  };

  return (
    <div className={cn("rost-data-table", className)} {...props}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => {
              const sortKey = column.sortKey ?? column.accessor;
              const isSortable = Boolean(column.sortable && sortKey);
              const isSorted = Boolean(isSortable && resolvedSort?.key === sortKey);
              const direction = isSorted ? resolvedSort?.direction : undefined;
              const ariaSort = isSorted
                ? direction === "asc"
                  ? "ascending"
                  : "descending"
                : "none";

              const handleSort = () => {
                if (!isSortable || !sortKey) return;
                if (!isSorted) {
                  handleSortChange({ key: sortKey, direction: "asc" });
                  return;
                }
                if (direction === "asc") {
                  handleSortChange({ key: sortKey, direction: "desc" });
                  return;
                }
                handleSortChange(null);
              };

              return (
                <TableHead
                  key={index}
                  className={column.headerClassName}
                  aria-sort={isSortable ? ariaSort : undefined}
                >
                  {isSortable ? (
                    <button
                      type="button"
                      className={cn(
                        "rost-table__sort",
                        isSorted && "rost-table__sort--active"
                      )}
                      onClick={handleSort}
                    >
                      <span>{column.header}</span>
                      <span className="rost-table__sort-indicator">
                        {direction === "asc" ? "↑" : direction === "desc" ? "↓" : ""}
                      </span>
                    </button>
                  ) : (
                    column.header
                  )}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pagedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="rost-data-table__empty">
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            pagedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex} className={column.className}>
                    {column.cell
                      ? column.cell(row)
                      : column.accessor
                        ? String(row[column.accessor] ?? "")
                        : null}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {pageSize && showPagination ? (
        <div className="rost-data-table__footer">
          <DataTablePagination
            pageIndex={clampedPageIndex}
            pageSize={pageSize}
            totalCount={sortedData.length}
            onPageChange={handlePageChange}
          />
        </div>
      ) : null}
    </div>
  );
}
