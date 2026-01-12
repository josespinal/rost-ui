import * as React from "react";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";

import { cn } from "./utils";

export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof BaseRadioGroup>;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseRadioGroup
        ref={ref}
        className={cn("rost-radio-group", className)}
        {...props}
      />
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export type RadioGroupItemProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const RadioGroupItem = React.forwardRef<
  HTMLLabelElement,
  RadioGroupItemProps
>(({ className, ...props }, ref) => {
  return (
    <label ref={ref} className={cn("rost-radio-group__item", className)} {...props} />
  );
});

RadioGroupItem.displayName = "RadioGroupItem";
