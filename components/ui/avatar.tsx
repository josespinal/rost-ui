import * as React from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

import { cn } from "./utils";

export type AvatarProps = React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>;

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseAvatar.Root
        ref={ref}
        className={cn("rost-avatar", className)}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Image>
>(({ className, ...props }, ref) => {
  return (
    <BaseAvatar.Image
      ref={ref}
      className={cn("rost-avatar__image", className)}
      {...props}
    />
  );
});

AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(({ className, ...props }, ref) => {
  return (
    <BaseAvatar.Fallback
      ref={ref}
      className={cn("rost-avatar__fallback", className)}
      {...props}
    />
  );
});

AvatarFallback.displayName = "AvatarFallback";
