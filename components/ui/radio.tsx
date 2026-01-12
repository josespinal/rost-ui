import * as React from "react";
import { Radio } from "@base-ui/react/radio";

import { cn } from "./utils";

export type RadioProps = React.ComponentPropsWithoutRef<typeof Radio.Root>;

export const RadioItem = React.forwardRef<HTMLSpanElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <Radio.Root
        ref={ref}
        className={cn("rost-radio", className)}
        {...props}
      />
    );
  }
);

RadioItem.displayName = "RadioItem";

export type RadioIndicatorProps = React.ComponentPropsWithoutRef<typeof Radio.Indicator>;

export const RadioIndicator = React.forwardRef<
  HTMLSpanElement,
  RadioIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <Radio.Indicator
      ref={ref}
      className={cn("rost-radio__indicator", className)}
      {...props}
    />
  );
});

RadioIndicator.displayName = "RadioIndicator";
