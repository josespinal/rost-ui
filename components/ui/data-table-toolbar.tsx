import * as React from "react";

import { cn } from "./utils";

export type DataTableToolbarProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

/**
 * Toolbar component for data tables with title, description, and action area.
 *
 * @example
 * ```tsx
 * <DataTableToolbar title="Users" description="Manage your users">
 *   <Button>Add User</Button>
 * </DataTableToolbar>
 * ```
 */
export function DataTableToolbar({
  className,
  title,
  description,
  children,
  ...props
}: DataTableToolbarProps) {
  return (
    <div className={cn("rost-data-table__toolbar", className)} {...props}>
      <div className="rost-data-table__toolbar-title">
        {title ? <h3>{title}</h3> : null}
        {description ? <p>{description}</p> : null}
      </div>
      <div className="rost-data-table__toolbar-actions">{children}</div>
    </div>
  );
}
