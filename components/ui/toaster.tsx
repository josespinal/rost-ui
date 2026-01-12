import * as React from "react";
import { Toast } from "@base-ui/react/toast";
import type {
  ToastManagerAddOptions,
  ToastManagerPromiseOptions,
} from "@base-ui/react/toast";

import {
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./toast";

const toastManager = Toast.createToastManager();

export function toast<Data extends object = Record<string, unknown>>(
  options: ToastManagerAddOptions<Data>
) {
  return toastManager.add(options);
}

export function toastPromise<Value, Data extends object = Record<string, unknown>>(
  promise: Promise<Value>,
  options: ToastManagerPromiseOptions<Value, Data>
) {
  return toastManager.promise(promise, options);
}

export function Toaster() {
  return (
    <ToastProvider toastManager={toastManager}>
      <Toast.Portal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </Toast.Portal>
    </ToastProvider>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <ToastRoot key={toast.id} toast={toast}>
      <ToastContent>
        {toast.title ? <ToastTitle>{toast.title}</ToastTitle> : null}
        {toast.description ? <ToastDescription>{toast.description}</ToastDescription> : null}
        <ToastClose aria-label="Close" />
      </ToastContent>
    </ToastRoot>
  ));
}
