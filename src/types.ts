export type Skill = {
  idCode: string;
  name: string;
  url: string;
  description: string;
};
/// falls undefined oder nicht existiert
export const nullObjectSkill = {
  idCode: "",
  name: "",
  url: "",
  description: "",
};

export type Job = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  todo: string;
  skills: Skill[];
};

//da rawjob kein skills hat muss sseperat definieren
export type RawJob = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  todo: string;
};
