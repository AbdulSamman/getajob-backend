import { camelCase } from "lodash-es";
// welcomeToThisNewNode.jsSite
import axios from "axios";
const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";
const options = {
    method: "GET",
    url: url,
    headers: {
        "Accept-Encoding": "application/json",
    },
};
//const nouns = (await axios.get(url)).data;
const nouns = (await axios.request(options)).data;
//erste level ohne function funktionert ohne async
console.log(nouns);
const message = `Welcome to this new Node.js site, please enjoy!`;
const messageIdCode = camelCase(message);
export const mainContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Info Site</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 0 1rem;
        }
    </style>
</head>
<body>
    <h1>Info Site</h1>
    <p>${message}</p>
    <p>${messageIdCode}</p>


<h2>Nouns</h2>
${nouns
    .map((noun) => {
    return `<div class="verb">
        <div class="singular">${noun.article} ${noun.singular}</div>
    </div>`;
})
    .join("")}
</body>
</html>


`;
//# sourceMappingURL=content.js.map