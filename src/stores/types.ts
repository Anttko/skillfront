import {
  NotificationMessage,
  RankedSfia,
  RankedSoftSkill,
  Sfia,
  SfiaRank,
  SoftRank,
  SoftSkill,
  User,
} from '../types/types';

export interface LoginSlice {
  isLoggedIn: boolean;
  user: User | null;
  login: (hashkey: string) => void;
  logout: () => void;
  initUser: () => void;
}
export interface SfiaSlice {
  allSfiaSkills: Sfia[];
  setSfia: (sfia: Sfia[]) => void;
  findSfia: (text: string) => void;
}

export interface SelectionSlice {
  countValuable: number;
  countMoreValuable: number;
  countImportant: number;
  countFuture: number;

  selectedSfia: RankedSfia[];
  addSelection: (item: RankedSfia) => void;
  removeSelection: (item: RankedSfia) => void;
  clearAll: () => void;
  rankSfiaSelection: (item: Sfia, result: SfiaRank) => void;
  calculateSfiaRanking: () => void;
}

export interface NotificationSlice {
  notification: NotificationMessage;
  notificationTime: number;
  setNotification: (notification: NotificationMessage) => void;
  clearNotification: () => void;
}

export interface SoftSkillSlice {
  allSoftSkills: SoftSkill[];
  setSoftSkills: (softSkills: SoftSkill[]) => void;
  findSoftSkill: (text: string) => void;
}

export interface SoftSelectionSlice {
  selectedSoftSkills: RankedSoftSkill[];
  addSoftSelection: (item: RankedSoftSkill) => void;
  removeSoftSelection: (item: RankedSoftSkill) => void;
  clearAllSoft: () => void;
  editSoftSelection: (item: RankedSoftSkill, result: SoftRank) => void;
}

export interface ProgressSlice {
  progress: number;
  incrementProgress: () => void;
  decrementProgress: () => void;
  resetProgress: () => void;
}
