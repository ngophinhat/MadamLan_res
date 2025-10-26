import React, { createContext, useState, useContext, useCallback } from 'react';
import ToastNotification from '../components/Notification'; // Sửa tên import

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message) => {
    const id = Date.now();
    setNotification({ message, id });
    setTimeout(() => {
      setNotification((current) => (current && current.id === id ? null : current));
    }, 3000);
  }, []);

  const value = { showNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notification && <ToastNotification message={notification.message} key={notification.id} />}
    </NotificationContext.Provider>
  );
};