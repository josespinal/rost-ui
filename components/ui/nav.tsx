import * as React from "react";

import { cn } from "./utils";

export type NavProps = React.HTMLAttributes<HTMLElement>;

export const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ className, ...props }, ref) => {
    return <nav ref={ref} className={cn("rost-nav", className)} {...props} />;
  }
);

Nav.displayName = "Nav";

export type NavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

export const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ className, active, ...props }, ref) => {
    return (
      <a
        ref={ref}
        data-active={active || undefined}
        className={cn("rost-nav__item", active && "rost-nav__item--active", className)}
        {...props}
      />
    );
  }
);

NavItem.displayName = "NavItem";
