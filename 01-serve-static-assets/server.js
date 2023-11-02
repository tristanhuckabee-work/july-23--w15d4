const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  const html = fs.readFileSync('./index.html');

  if (req.url.startsWith('/static')) {
    let filepath = req.url.split('static')[1];
    console.log(`./assets${filepath}`)
    let file = fs.readFileSync(`./assets${filepath}`);

    
    res.statusCode = 200;
    if (filepath.startsWith('/images')) res.setHeader('Content-Type', 'images/jpeg');
    if (filepath.startsWith('/css')) res.setHeader('Content-Type', 'text/css');
    return res.end(file);
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  return res.end(html);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));