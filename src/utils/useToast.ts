import { toast, type ToastOptions,  } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info'  | 'default';

interface ToastProps extends ToastOptions {
  message: string;
  type?: ToastType;
}

export const showToast = ({ message, type = 'default', ...options }: ToastProps) => {
  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'info':
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
};

