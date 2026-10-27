const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="de">
    <head><meta charset="utf-8"><title>Node.js Test</title></head>
    <body>
      <h1>Node.js läuft! 🎉</h1>
      <p>Server-Zeit: ${new Date().toISOString()}</p>
      <p>Node-Version: ${process.version}</p>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
