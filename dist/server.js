import express from "express";
import cors from "cors";
import * as model from "./model.js";
const app = express();
app.use(cors());
const port = 3001;
app.get("/", (req, res) => {
    res.send(model.getApiDocumentationHTML());
});
app.get("/jobs", (req, res) => {
    res.json(model.getJobs());
});
app.get("/toDos", (req, res) => {
    res.json(model.getToDos());
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map