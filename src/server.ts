import { createServer } from "http";
import { mainContent } from "./content.js"; //content.ts => fehlermeldung, vite/react löst das
const port = 3115;

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text-plain" });
  res.write(mainContent);
  res.end();
}).listen(port);

console.log(`listening on http://localhost:${port}`);
