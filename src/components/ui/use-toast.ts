// src/components/ui/use-toast.ts
import { useEffect, useState } from "react";
import type React from "react";

const TOAST_LIMIT = 1;

let count = 0;
function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

/**
 * O <Toaster /> faz:
 * toasts.map(({ id, title, description, action, ...props }) => <Toast {...props} />)
 *
 * Então a gente tipa `ToastOptions` com os campos que você usa
 * e deixa um index signature para permitir props extras (variant, className, etc),
 * sem o TS quebrar.
 */
export type ToastOptions = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number; // ms (Infinity para não fechar)
  // props extras que você quiser passar pro <Toast ...props />
  [key: string]: unknown;
};

export type ToastItem = ToastOptions & {
  id: string;
  dismiss: () => void;
};

type ToastState = {
  toasts: ToastItem[];
};

type ToastListener = (state: ToastState) => void;

type SetStateArg =
  | Partial<ToastState>
  | ((prev: ToastState) => ToastState);

const toastStore = {
  state: { toasts: [] as ToastItem[] } as ToastState,
  listeners: [] as ToastListener[],

  getState(): ToastState {
    return toastStore.state;
  },

  setState(nextState: SetStateArg): void {
    if (typeof nextState === "function") {
      toastStore.state = nextState(toastStore.state);
    } else {
      toastStore.state = { ...toastStore.state, ...nextState };
    }

    toastStore.listeners.forEach((listener) => listener(toastStore.state));
  },

  subscribe(listener: ToastListener): () => void {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener);
    };
  },
};

export function toast(props: ToastOptions) {
  const id = generateId();

  const update = (nextProps: Partial<ToastOptions>) => {
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...nextProps } : t)),
    }));
  };

  const dismiss = () => {
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  };

  toastStore.setState((state) => ({
    ...state,
    toasts: [{ ...props, id, dismiss }, ...state.toasts].slice(0, TOAST_LIMIT),
  }));

  return {
    id,
    dismiss,
    update,
  };
}

export function useToast() {
  const [state, setState] = useState<ToastState>(toastStore.getState());

  useEffect(() => {
    const unsubscribe = toastStore.subscribe((next) => setState(next));
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts: Array<ReturnType<typeof setTimeout>> = [];

    state.toasts.forEach((t) => {
      if (t.duration === Infinity) return;

      const timeout = setTimeout(() => {
        t.dismiss();
      }, (t.duration as number | undefined) ?? 5000);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}
