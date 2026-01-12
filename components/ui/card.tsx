import * as React from "react";

import { cn } from "./utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Card container component.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>Content</CardContent>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("rost-card", className)} {...props} />;
  }
);

Card.displayName = "Card";

/**
 * Card header section with optional title and description.
 */
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-card__header", className)} {...props} />
  );
});

CardHeader.displayName = "CardHeader";

/**
 * Card title heading.
 */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3 ref={ref} className={cn("rost-card__title", className)} {...props} />
  );
});

CardTitle.displayName = "CardTitle";

/**
 * Card description text.
 */
export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("rost-card__description", className)}
      {...props}
    />
  );
});

CardDescription.displayName = "CardDescription";

/**
 * Card main content area.
 */
export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-card__content", className)} {...props} />
  );
});

CardContent.displayName = "CardContent";

/**
 * Card footer section for actions.
 */
export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-card__footer", className)} {...props} />
  );
});

CardFooter.displayName = "CardFooter";
