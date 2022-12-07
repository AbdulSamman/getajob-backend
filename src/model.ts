import fs from "fs";

type Job = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  todo: string;
};

export const jobs = JSON.parse(
  fs.readFileSync("./src/data/jobs.json", "utf8")
) as Job[];
console.log(jobs);

export const getJobs = () => {
  return jobs;
};

export const getToDos = () => {
  jobs.map((job) => {
    return {
      todo: job.todo,
      company: job.company,
      title: job.title,
      test: "test",
    };
  });
};

export const getApiDocumentationHtml = () => {
  return `
  <h1>GET A JOB API</h1>
  <ul>
  
  <li><a href="jobs">/jobs</a></li>
  </ul>
  `;
};
