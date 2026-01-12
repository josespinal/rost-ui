import * as React from "react";

import { cn } from "./utils";

export type DataTableFiltersProps = React.HTMLAttributes<HTMLDivElement> & {
  onClear?: () => void;
  clearLabel?: string;
};

/**
 * Filters component for data tables with filter list and clear button.
 *
 * @example
 * ```tsx
 * <DataTableFilters onClear={() => clearFilters()}>
 *   <Select placeholder="Filter by status" />
 * </DataTableFilters>
 * ```
 */
export function DataTableFilters({
  className,
  onClear,
  clearLabel = "Clear",
  children,
  ...props
}: DataTableFiltersProps) {
  return (
    <div className={cn("rost-data-table__filters", className)} {...props}>
      <div className="rost-data-table__filters-list">{children}</div>
      {onClear ? (
        <button
          type="button"
          className="rost-data-table__filters-clear"
          onClick={onClear}
        >
          {clearLabel}
        </button>
      ) : null}
    </div>
  );
}
