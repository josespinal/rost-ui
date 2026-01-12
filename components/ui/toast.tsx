import * as React from "react";
import { Toast } from "@base-ui/react/toast";

import { cn } from "./utils";

export const ToastProvider = Toast.Provider;

export const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Toast.Viewport>
>(({ className, ...props }, ref) => {
  return (
    <Toast.Viewport
      ref={ref}
      className={cn("rost-toast-viewport", className)}
      {...props}
    />
  );
});

ToastViewport.displayName = "ToastViewport";

export const ToastRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Toast.Root>
>(({ className, ...props }, ref) => {
  return (
    <Toast.Root ref={ref} className={cn("rost-toast", className)} {...props} />
  );
});

ToastRoot.displayName = "ToastRoot";

export const ToastContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Toast.Content>
>(({ className, ...props }, ref) => {
  return (
    <Toast.Content
      ref={ref}
      className={cn("rost-toast__content", className)}
      {...props}
    />
  );
});

ToastContent.displayName = "ToastContent";

export const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Toast.Title>
>(({ className, ...props }, ref) => {
  return (
    <Toast.Title ref={ref} className={cn("rost-toast__title", className)} {...props} />
  );
});

ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Toast.Description>
>(({ className, ...props }, ref) => {
  return (
    <Toast.Description
      ref={ref}
      className={cn("rost-toast__description", className)}
      {...props}
    />
  );
});

ToastDescription.displayName = "ToastDescription";

export const ToastAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Toast.Action>
>(({ className, ...props }, ref) => {
  return (
    <Toast.Action
      ref={ref}
      className={cn("rost-toast__action", className)}
      {...props}
    />
  );
});

ToastAction.displayName = "ToastAction";

export const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Toast.Close>
>(({ className, children, ...props }, ref) => {
  return (
    <Toast.Close
      ref={ref}
      className={cn("rost-toast__close", className)}
      {...props}
    >
      {children ?? (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            fill="currentColor"
            d="m12.6 4.6-1.1-1.1L8 6.9 4.6 3.5 3.5 4.6 6.9 8l-3.4 3.4 1.1 1.1L8 9.1l3.4 3.4 1.1-1.1L9.1 8l3.5-3.4Z"
          />
        </svg>
      )}
    </Toast.Close>
  );
});

ToastClose.displayName = "ToastClose";
