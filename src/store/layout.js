// notificationStore.js
import { create } from 'zustand';

const useNotificationStore = create((set) => ({
  notifications: [],
  
  addNotification: (message, type = 'info') => {
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Date.now(), message, type },
      ],
    }));
    
    // Auto-remove notification after a few seconds
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((notif) => notif.id !== Date.now()),
      }));
    }, 3000); // Adjust time as needed
  },
  
  clearNotifications: () => {
    set(() => ({
      notifications: [],
    }));
  },
}));

export default useNotificationStore;
