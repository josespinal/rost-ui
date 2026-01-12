import * as React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";

import { cn } from "./utils";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>;

export const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseCheckbox.Root
        ref={ref}
        className={cn("rost-checkbox", className)}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export type CheckboxIndicatorProps = React.ComponentPropsWithoutRef<
  typeof BaseCheckbox.Indicator
>;

export const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement,
  CheckboxIndicatorProps
>(({ className, children, ...props }, ref) => {
  return (
    <BaseCheckbox.Indicator
      ref={ref}
      className={cn("rost-checkbox__indicator", className)}
      {...props}
    >
      {children ?? (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.3 11.2 3.4 8.4l1.1-1.1 1.8 1.8 5-5 1.1 1.1-6.1 6.2Z"
          />
        </svg>
      )}
    </BaseCheckbox.Indicator>
  );
});

CheckboxIndicator.displayName = "CheckboxIndicator";
