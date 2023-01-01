import express from "express";
import cors from "cors";
import * as model from "./model.js";

const app = express();
app.use(cors());
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(model.getApiDocumentationHTML());
});

app.get("/jobs", (req: express.Request, res: express.Response) => {
  res.json(model.getJobs());
});

app.get("/toDos", (req: express.Request, res: express.Response) => {
  res.json(model.getToDos());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
