import React, { useState } from 'react';
import { Toast } from './Toast';

type ToastType = 'success' | 'warning' | 'info';

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToasterContextValue {
  toast: (message: string, type?: ToastType) => void;
}

export const ToasterContext = React.createContext<ToasterContextValue>({
  toast: () => {},
});

export const useToaster = () => React.useContext(ToasterContext);

export const Toaster: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = (message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToasterContext.Provider value={{ toast }}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToasterContext.Provider>
  );
};