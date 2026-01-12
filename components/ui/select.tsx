import * as React from "react";
import { Select } from "@base-ui/react/select";

import { cn } from "./utils";

export const SelectRoot = Select.Root;
export const SelectGroup = Select.Group;
export const SelectValue = Select.Value;
export const SelectPositioner = Select.Positioner;
export const SelectPortal = Select.Portal;

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Select.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <Select.Trigger
      ref={ref}
      className={cn("rost-select-trigger", className)}
      {...props}
    />
  );
});

SelectTrigger.displayName = "SelectTrigger";

export const SelectIcon = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof Select.Icon>
>(({ className, children, ...props }, ref) => {
  return (
    <Select.Icon
      ref={ref}
      className={cn("rost-select-icon", className)}
      {...props}
    >
      {children ?? (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            fill="currentColor"
            d="m4.2 6.1 3.8 3.8 3.8-3.8 1.1 1.1-4.9 4.9-4.9-4.9 1.1-1.1Z"
          />
        </svg>
      )}
    </Select.Icon>
  );
});

SelectIcon.displayName = "SelectIcon";

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Popup>
>(({ className, ...props }, ref) => {
  return (
    <Select.Popup
      ref={ref}
      className={cn("rost-select-content", className)}
      {...props}
    />
  );
});

SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ className, ...props }, ref) => {
  return (
    <Select.Item
      ref={ref}
      className={cn("rost-select-item", className)}
      {...props}
    />
  );
});

SelectItem.displayName = "SelectItem";

export const SelectItemText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof Select.ItemText>
>(({ className, ...props }, ref) => {
  return (
    <Select.ItemText
      ref={ref}
      className={cn("rost-select-item-text", className)}
      {...props}
    />
  );
});

SelectItemText.displayName = "SelectItemText";

export const SelectItemIndicator = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof Select.ItemIndicator>
>(({ className, children, ...props }, ref) => {
  return (
    <Select.ItemIndicator
      ref={ref}
      className={cn("rost-select-item-indicator", className)}
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
    </Select.ItemIndicator>
  );
});

SelectItemIndicator.displayName = "SelectItemIndicator";

export const SelectLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Label>
>(({ className, ...props }, ref) => {
  return (
    <Select.Label
      ref={ref}
      className={cn("rost-select-label", className)}
      {...props}
    />
  );
});

SelectLabel.displayName = "SelectLabel";

export const SelectSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Separator>
>(({ className, ...props }, ref) => {
  return (
    <Select.Separator
      ref={ref}
      className={cn("rost-select-separator", className)}
      {...props}
    />
  );
});

SelectSeparator.displayName = "SelectSeparator";
