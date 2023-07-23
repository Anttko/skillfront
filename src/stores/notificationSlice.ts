import { StateCreator } from 'zustand';
import { NotificationSlice } from './types';
import { NotificationMessage } from '../types/types';

const notification: NotificationMessage = {
  message: null,
  errorType: null,
  displayTime: null,
};
const initialTime = 3000;
export const notificationSlice: StateCreator<NotificationSlice, [], [], NotificationSlice> = (set) => ({
  notification,
  notificationTime: initialTime,
  setNotification: (notification: NotificationMessage) => {

    set({ notification: notification, notificationTime: notification.displayTime });
  },
  clearNotification: () => {
    set({ notification: { message: null, errorType: null, displayTime: null } });
  },
});
