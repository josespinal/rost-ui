import * as React from "react";
import { Field } from "@base-ui/react/field";
import { Form as BaseForm } from "@base-ui/react/form";

import { cn } from "./utils";

export type FormProps = React.ComponentPropsWithoutRef<typeof BaseForm>;

/**
 * Form container component built on Base UI Form.
 *
 * @example
 * ```tsx
 * <Form>
 *   <FormField>
 *     <FormLabel>Name</FormLabel>
 *     <FormControl type="text" />
 *     <FormDescription>Enter your name</FormDescription>
 *   </FormField>
 * </Form>
 * ```
 */
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseForm ref={ref} className={cn("rost-form", className)} {...props} />
    );
  }
);

Form.displayName = "Form";

export type FormFieldProps = React.ComponentPropsWithoutRef<typeof Field.Root>;

/**
 * Form field wrapper for grouping label, control, and messages.
 */
export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <Field.Root ref={ref} className={cn("rost-field", className)} {...props} />
    );
  }
);

FormField.displayName = "FormField";

/**
 * Form field label.
 */
export const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof Field.Label>
>(({ className, ...props }, ref) => {
  return (
    <Field.Label ref={ref} className={cn("rost-label", className)} {...props} />
  );
});

FormLabel.displayName = "FormLabel";

/**
 * Form field control (input, textarea, etc.).
 */
export const FormControl = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof Field.Control>
>(({ className, ...props }, ref) => {
  return (
    <Field.Control
      ref={ref}
      className={cn("rost-input", className)}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

/**
 * Form field description/help text.
 */
export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof Field.Description>
>(({ className, ...props }, ref) => {
  return (
    <Field.Description
      ref={ref}
      className={cn("rost-description", className)}
      {...props}
    />
  );
});

FormDescription.displayName = "FormDescription";

/**
 * Form field error message.
 */
export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof Field.Error>
>(({ className, ...props }, ref) => {
  return (
    <Field.Error ref={ref} className={cn("rost-error", className)} {...props} />
  );
});

FormMessage.displayName = "FormMessage";
