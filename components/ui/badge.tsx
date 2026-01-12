import * as React from "react";

import { cn } from "./utils";

type BadgeVariant = "default" | "outline" | "accent";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "rost-badge",
  outline: "rost-badge rost-badge--outline",
  accent: "rost-badge rost-badge--accent",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span ref={ref} className={cn(variantClasses[variant], className)} {...props} />
    );
  }
);

Badge.displayName = "Badge";
