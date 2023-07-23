import { create } from 'zustand';
import { logInSlice } from './loginSlice';
import { sfiaSlice } from './sfiaSlice';
import { selectionSlice } from './selectionSlice';
import { LoginSlice, SfiaSlice, SelectionSlice, NotificationSlice, SoftSkillSlice, SoftSelectionSlice } from './types';
import { notificationSlice } from './notificationSlice';
import { softSkillSlice } from './softSkillSlice';
import { softSelectionSlice } from './softSelectionSlice';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBoundStore = create<
  LoginSlice & SfiaSlice & SelectionSlice & NotificationSlice & SoftSkillSlice & SoftSelectionSlice
>()(
  persist(
    (...a) => ({
      ...logInSlice(...a),
      ...sfiaSlice(...a),
      ...selectionSlice(...a),
      ...notificationSlice(...a),
      ...softSkillSlice(...a),
      ...softSelectionSlice(...a),
      // Add more stores here
    }),
    {
      name: 'collector-user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
