import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";

import { cn } from "./utils";

/**
 * Modal root component. Controls the open/closed state.
 */
export const Modal = Dialog.Root;

/**
 * Modal trigger button that opens the modal.
 */
export const ModalTrigger = Dialog.Trigger;

/**
 * Modal portal for rendering outside the DOM hierarchy.
 */
export const ModalPortal = Dialog.Portal;

/**
 * Modal close button.
 */
export const ModalClose = Dialog.Close;

/**
 * Modal backdrop overlay.
 */
export const ModalOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Backdrop
      ref={ref}
      className={cn("rost-modal-overlay", className)}
      {...props}
    />
  );
});

ModalOverlay.displayName = "ModalOverlay";

/**
 * Modal content container.
 *
 * @example
 * ```tsx
 * <Modal>
 *   <ModalTrigger>Open</ModalTrigger>
 *   <ModalPortal>
 *     <ModalOverlay />
 *     <ModalContent>
 *       <ModalHeader>
 *         <ModalTitle>Title</ModalTitle>
 *       </ModalHeader>
 *     </ModalContent>
 *   </ModalPortal>
 * </Modal>
 * ```
 */
export const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Popup>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Popup
      ref={ref}
      className={cn("rost-modal-content", className)}
      {...props}
    />
  );
});

ModalContent.displayName = "ModalContent";

/**
 * Modal header section.
 */
export const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-modal-header", className)} {...props} />
  );
});

ModalHeader.displayName = "ModalHeader";

/**
 * Modal title heading.
 */
export const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Title
      ref={ref}
      className={cn("rost-modal-title", className)}
      {...props}
    />
  );
});

ModalTitle.displayName = "ModalTitle";

/**
 * Modal description text.
 */
export const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Description
      ref={ref}
      className={cn("rost-modal-description", className)}
      {...props}
    />
  );
});

ModalDescription.displayName = "ModalDescription";

/**
 * Modal footer section for actions.
 */
export const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("rost-modal-footer", className)} {...props} />
  );
});

ModalFooter.displayName = "ModalFooter";
