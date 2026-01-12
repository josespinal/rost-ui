import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";

import { cn } from "./utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

/**
 * Button component props extending Base UI Button.
 */
export type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "rost-button",
  secondary: "rost-button rost-button--secondary",
  ghost: "rost-button rost-button--ghost",
  outline: "rost-button rost-button--outline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "rost-button--sm",
  md: "",
  lg: "rost-button--lg",
};

/**
 * Button component with variants and sizes built on Base UI.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" size="sm">Small</Button>
 * <Button variant="ghost">Ghost</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={cn(variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
