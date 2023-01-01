import fs from "fs";
//sich selbst importieren
import * as model from "./model.js";
import { RawJob, Job, Skill, nullObjectSkill } from "./types.js";

const rawJobs: RawJob[] = JSON.parse(
  fs.readFileSync("./src/data/jobs.json", "utf-8")
);

const skillInfos: Skill = JSON.parse(
  fs.readFileSync("./src/data/skillInfos.json", "utf-8")
);

export const getJobs = () => {
  const jobs: Job[] = [];
  rawJobs.forEach((rawJob) => {
    const job: Job = {
      ...rawJob,
      skills: model.buildSkills(rawJob.skillList),
    };
    jobs.push(job);
  });
  return jobs;
};

export const buildSkills = (skillList: string) => {
  const skills: Skill[] = [];
  const skillIdCodes = skillList.split(",").map((m) => m.trim());
  skillIdCodes.forEach((skillIdCode) => {
    const _skill = skillInfos[skillIdCode];
    if (_skill === undefined) {
      const skill: Skill = {
        ...nullObjectSkill,
        idCode: skillIdCode,
      };
      skills.push(skill);
    } else {
      const skill: Skill = {
        ..._skill,
        skillIdCode,
      };
      skills.push(skill);
    }
  });

  return skills;
};

export const getToDos = () => {
  return rawJobs.map((job) => {
    return {
      todo: job.todo,
      company: job.company,
      title: job.title,
    };
  });
};

export const getApiDocumentationHTML = () => {
  return `
  
  <h1>GETAJOB API</h1>
  <ul>
  <li>
  <a href="/jobs">/jobs</a> - return an array of job object
  </li>
  </ul>
  `;
};
