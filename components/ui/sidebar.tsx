import * as React from "react";

import { cn } from "./utils";

export type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    return <aside ref={ref} className={cn("rost-sidebar", className)} {...props} />;
  }
);

Sidebar.displayName = "Sidebar";

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-sidebar__header", className)} {...props} />
  );
});

SidebarHeader.displayName = "SidebarHeader";

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-sidebar__content", className)} {...props} />
  );
});

SidebarContent.displayName = "SidebarContent";

export const SidebarSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-sidebar__section", className)} {...props} />
  );
});

SidebarSection.displayName = "SidebarSection";

export const SidebarSectionTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("rost-sidebar__section-title", className)}
      {...props}
    />
  );
});

SidebarSectionTitle.displayName = "SidebarSectionTitle";

export type SidebarItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

export const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, active, ...props }, ref) => {
    return (
      <a
        ref={ref}
        data-active={active || undefined}
        className={cn(
          "rost-sidebar__item",
          active && "rost-sidebar__item--active",
          className
        )}
        {...props}
      />
    );
  }
);

SidebarItem.displayName = "SidebarItem";

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-sidebar__footer", className)} {...props} />
  );
});

SidebarFooter.displayName = "SidebarFooter";
