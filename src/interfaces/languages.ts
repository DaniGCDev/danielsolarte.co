export interface LanguageAboutMe {
  description: string;
}

export interface LanguageMenuItems {
  aboutMe: string;
  projects: string;
  contact: string;
}

export interface LanguageSkills {
  fullStack: string;
  frontEnd: string;
  backEnd: string;
  devOps: string;
  soft: string;
}

export interface LanguageResource {
  aboutMe: LanguageAboutMe;
  menuItems: LanguageMenuItems;
  skills: LanguageSkills;
}
