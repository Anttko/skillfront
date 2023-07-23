export type NotificationType = 'success' | 'warning' | 'error' | 'info' | null;
export type User = {
  hashkeyId: string;
  token: string;
};
export type NotificationMessage = {
  message: string | null;
  errorType: NotificationType;
  displayTime: number | null;
};
export type Sfia = {
  id?: number;
  sfiaid: string;
  levels: string;
  level1: string;
  level2: string;
  level3: string;
  level5: string;
  level6: string;
  level7: string;
  code: string;
  skill: string;
  category: string;
  subcategory: string;
  overalldescription: string;
  guidancenotes: string;
  level1description: string;
  level2description: string;
  level3description: string;
  level4description: string;
  level5description: string;
  level6description: string;
  level7description: string;
  keywords: string[];
};

export interface RankedSfia extends Sfia {
  result?: SfiaRank;
}

export type SoftSkill = {
  id?: number;
  softSkillNumber: string;
  softSkill: string;
  description: string;
};

export interface RankedSoftSkill extends SoftSkill {
  result?: SoftRank;
}

export type Responsibilities = {
  level: number;
  autonomy: string;
  influence: string;
  complexity: string;
  businessSkills: string;
  knowledge: string;
};

export type SfiaRank = 'valuable' | 'more valuable' | 'important' | 'future';
export type SoftRank = 'valuable' | 'more valuable' | 'important';
export type SfiaBody = {
  hashkeyId: string;
  result: string;
  sfiaSkillId: number;
};
export type SoftSkillBody = {
  hashkeyId: string;
  result: string;
  softSkillId: number;
};
export type SaveResultsType = {
  sfia: SfiaBody[];
  soft: SoftSkillBody[];
};