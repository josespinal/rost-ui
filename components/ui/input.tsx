import * as React from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "./utils";

export type InputProps = React.ComponentPropsWithoutRef<typeof BaseInput>;

/**
 * Text input component built on Base UI.
 *
 * @example
 * ```tsx
 * <Input type="text" placeholder="Enter text" />
 * <Input type="email" disabled />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseInput ref={ref} className={cn("rost-input", className)} {...props} />
    );
  }
);

Input.displayName = "Input";
