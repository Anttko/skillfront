import { StateCreator } from 'zustand';
import { SoftSelectionSlice } from './types';
import { RankedSoftSkill, SoftRank } from '../types/types';
import { useBoundStore } from '.';

export const softSelectionSlice: StateCreator<SoftSelectionSlice, [], [], SoftSelectionSlice> = (set) => ({
  selectedSoftSkills: [],
  addSoftSelection: (item: RankedSoftSkill) => {
    const find = useBoundStore.getState().selectedSoftSkills.find((i) => i.softSkillNumber === item.softSkillNumber);
    if (!find && useBoundStore.getState().selectedSoftSkills.length < 3) {
      set((state) => ({ selectedSoftSkills: [...state.selectedSoftSkills, item] }));
      useBoundStore.getState().setNotification({
        message: `${item.softSkill} added to selection`,
        errorType: 'success',
        displayTime: 3000,
      });
    }

    set((state) => ({
      selectedSoftSkills: state.selectedSoftSkills.map((i) => {
        if (i.softSkillNumber === item.softSkillNumber) {
          return { ...i, result: item.result };
        }
        return i;
      }),
    }));
  },

  editSoftSelection: (item: RankedSoftSkill, result: SoftRank) => {
    set((state) => ({
      selectedSoftSkills: state.selectedSoftSkills.map((i) => {
        if (i.softSkillNumber === item.softSkillNumber) {
          return { ...i, result };
        }
        return i;
      }),
    }));

    useBoundStore.getState().setNotification({
      message: `${item.softSkill} edited`,
      errorType: 'success',
      displayTime: 3000,
    });

  },

  removeSoftSelection: (item: RankedSoftSkill) => {
    set((state) => ({
      selectedSoftSkills: state.selectedSoftSkills.filter((i) => i.softSkillNumber !== item.softSkillNumber),
    }));

    useBoundStore.getState().setNotification({
      message: `${item.softSkill} removed from selection`,
      errorType: 'error',
      displayTime: 3000,
    });
  },
  clearAllSoft: () => {
    set(() => ({
      selectedSoftSkills: [],
    }));
  },
});
