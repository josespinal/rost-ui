import * as React from "react";
import { Combobox } from "@base-ui/react/combobox";

import { cn } from "./utils";

export const ComboboxRoot = Combobox.Root;
export const ComboboxPortal = Combobox.Portal;

export const ComboboxInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof Combobox.Input>
>(({ className, ...props }, ref) => {
  return (
    <Combobox.Input
      ref={ref}
      className={cn("rost-combobox-input", className)}
      {...props}
    />
  );
});

ComboboxInput.displayName = "ComboboxInput";

export const ComboboxTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Combobox.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <Combobox.Trigger
      ref={ref}
      className={cn("rost-combobox-trigger", className)}
      {...props}
    />
  );
});

ComboboxTrigger.displayName = "ComboboxTrigger";

export const ComboboxPositioner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Combobox.Positioner>
>(({ className, ...props }, ref) => {
  return (
    <Combobox.Positioner
      ref={ref}
      className={cn("rost-combobox-positioner", className)}
      {...props}
    />
  );
});

ComboboxPositioner.displayName = "ComboboxPositioner";

export const ComboboxPopup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Combobox.Popup>
>(({ className, ...props }, ref) => {
  return (
    <Combobox.Popup
      ref={ref}
      className={cn("rost-combobox-popup", className)}
      {...props}
    />
  );
});

ComboboxPopup.displayName = "ComboboxPopup";

export const ComboboxItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Combobox.Item>
>(({ className, ...props }, ref) => {
  return (
    <Combobox.Item
      ref={ref}
      className={cn("rost-combobox-item", className)}
      {...props}
    />
  );
});

ComboboxItem.displayName = "ComboboxItem";

export const ComboboxItemText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof Combobox.ItemText>
>(({ className, ...props }, ref) => {
  return (
    <Combobox.ItemText
      ref={ref}
      className={cn("rost-combobox-item-text", className)}
      {...props}
    />
  );
});

ComboboxItemText.displayName = "ComboboxItemText";

export const ComboboxItemIndicator = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof Combobox.ItemIndicator>
>(({ className, children, ...props }, ref) => {
  return (
    <Combobox.ItemIndicator
      ref={ref}
      className={cn("rost-combobox-item-indicator", className)}
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
    </Combobox.ItemIndicator>
  );
});

ComboboxItemIndicator.displayName = "ComboboxItemIndicator";
