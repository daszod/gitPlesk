const fs = require("fs");
const path = require("path");
const pc = require("picocolors");

const outDir = path.join(__dirname, "dist");
const timestamp = new Date().toLocaleString("de-DE");

const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Node Build Test</title>
</head>
<body>
  <h1>npm Build erfolgreich ✅</h1>
  <p>Erstellt am: ${timestamp}</p>
</body>
</html>
`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), html);

console.log(pc.green("Build erfolgreich:"), pc.bold(path.join(outDir, "index.html")));
console.log(pc.gray("Zeitstempel:"), timestamp);
