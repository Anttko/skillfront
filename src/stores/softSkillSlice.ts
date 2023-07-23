import { StateCreator } from 'zustand';
import { SoftSkillSlice } from './types';
import { SoftSkill } from '../types/types';
export const softSkillSlice: StateCreator<SoftSkillSlice, [], [], SoftSkillSlice> = (set, get) => ({
  allSoftSkills: [],
  setSoftSkills: (allSoftSkills: SoftSkill[]) => {
    set({ allSoftSkills });
  },
  findSoftSkill: (find: string) => {
    const allSoftSkills = get().allSoftSkills;
    const filteredSoftSkills = allSoftSkills.filter((skill) => {
      skill.description.toLowerCase().includes(find.toLowerCase());
    });
    return set({ allSoftSkills: filteredSoftSkills });
  },
});
