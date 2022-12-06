// import { createServer } from "http";
// import { mainContent } from "./content.js"; //content.ts => fehlermeldung, vite/react löst das
// //filesystem  z.b verzeichnisse lesen (festplatte)
// import fs from "fs";
// const port = 3115;
// // JSON.parse => object   ohne parse => string
// // express kummert sich um diese kleinigkeiten
// const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
// console.log(jobs);
// createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text-plain" });
//   res.write(JSON.stringify(jobs));
//   res.end();
// }).listen(port);
// console.log(`listening on http://localhost:${port}`);
// express
import express from "express";
import fs from "fs";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3115;
const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
console.log(jobs);
app.get("/", (req, res) => {
    res.send("job site api");
});
app.get("/jobs", (req, res) => {
    res.json(jobs);
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map