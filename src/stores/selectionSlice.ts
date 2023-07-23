import { StateCreator } from 'zustand';
import { SelectionSlice } from './types';
import { RankedSfia, SfiaRank } from '../types/types';
import { useBoundStore } from './index';

const initalValuable = 0;
const initalMoreValuable = 0;
const initalImportant = 0;
const initalFuture = 0;

export const selectionSlice: StateCreator<SelectionSlice, [], [], SelectionSlice> = (set) => ({
  selectedSfia: [],
  countValuable: initalValuable,
  countMoreValuable: initalMoreValuable,
  countImportant: initalImportant,
  countFuture: initalFuture,
  addSelection: (item: RankedSfia) => {
 
    if (useBoundStore.getState().selectedSfia.length >= 20) {
      return useBoundStore.getState().setNotification({
        message: `You can only select 20 skills`,
        errorType: 'error',
        displayTime: 3000,
      });
    }
    set((state) => ({ selectedSfia: [...state.selectedSfia, item] }));
    useBoundStore.getState().setNotification({
      message: `${item.skill} added to selection`,
      errorType: 'success',
      displayTime: 3000,
    });
  },

  rankSfiaSelection: (item: RankedSfia, result: SfiaRank) => {
    set((state) => ({
      selectedSfia: state.selectedSfia.map((i) => {
        if (i.sfiaid === item.sfiaid) {
          return { ...i, result };
        }
        return i;
      }),
    }));
    useBoundStore.getState().calculateSfiaRanking();
  },

  removeSelection: (item: RankedSfia) => {
    set((state) => ({
      selectedSfia: state.selectedSfia.filter((i) => i.sfiaid !== item.sfiaid),
    }));
    useBoundStore.getState().setNotification({
      message: `${item.skill} removed from selection`,
      errorType: 'error',
      displayTime: 3000,
    });
  },
  calculateSfiaRanking: () => {
    set((state) => ({
      countValuable: state.selectedSfia.filter((i) => i.result === 'valuable').length,
      countMoreValuable: state.selectedSfia.filter((i) => i.result === 'more valuable').length,
      countImportant: state.selectedSfia.filter((i) => i.result === 'important').length,
      countFuture: state.selectedSfia.filter((i) => i.result === 'future').length,
    }));
  },

  clearAll: () => {
    set(() => ({
      selectedSfia: [],
      countValuable: initalValuable,
      countMoreValuable: initalMoreValuable,
      countImportant: initalImportant,
      countFuture: initalFuture,
    }));
  },
});
