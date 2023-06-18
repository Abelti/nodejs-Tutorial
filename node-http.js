const http =  require('node:http');
const fs = require('node:fs');
const { dirname } = require('node:path');
const { json } = require('stream/consumers');
//event emitter class
//the call back function is a request listener
//stream
//pipe
//content from html
//json file contents
//watch mode
//dynamic values (html template)
//routing

const Person = {firstName: 'Abelti', lastName: 'Beshana'};

const server = http.createServer((req, res) => {
    const myname = 'Eyob';
    res.writeHead(200, {'Content-Type': 'text/html, text/css'});
    let htmlFile = fs.readFileSync('./index.html', 'utf-8');
    // let cssFile = fs.readFileSync('./main.css', 'utf-8');
    htmlFile = htmlFile.replace('{{name}}', myname);
    // fs.createReadStream('./index.html').pipe(res);
    //res.end('<h1>Hello World</h1>');
    //res.end(json(Person));
    res.end(htmlFile);
    // res.end(JSON.stringify(Person));
});

//routing
// const server = http.createServer((req, res) => {
//     // res.end (req.url);// to show the current url
//     // console.log(req.url)

//     if (req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Home page');
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('About page');
//     }
//     else if (req.url === '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Contact page');
//     }
//     else {
//         res.writeHead(404);
//         res.end("Page not found");
//     }
// });

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});