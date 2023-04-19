const https =  require('node:https');
const fs = require('node:fs');

const server = https.createServer({
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key'),
},
    (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world from HTTPS');
})

server.listen(3001, () => {
    console.log('https server listening on port 3001');
});