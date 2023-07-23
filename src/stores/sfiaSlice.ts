import { StateCreator } from 'zustand';
import { SfiaSlice } from './types';
import { Sfia } from '../types/types';
const initialState = [];

export const sfiaSlice: StateCreator<SfiaSlice, [], [], SfiaSlice> = (set) => ({
  allSfiaSkills: initialState,
  searchValue: '',
  setSfia: (allSfiaSkills: Sfia[]) => {
    set({ allSfiaSkills });
  },
  findSfia: (find: string) => {
    const allSfiaSkills = initialState;
    const filteredSfia = allSfiaSkills.filter((sfia) => {
      return sfia.keywords.some((keyword) => {
        return keyword.toLowerCase().includes(find.toLowerCase());
      });
    });
    if (filteredSfia.length === 0) {
      return set({ allSfiaSkills: initialState });
    }
    return set({ allSfiaSkills: filteredSfia });
  },
});
