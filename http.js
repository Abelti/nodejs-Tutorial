const http =  require('node:http');
// import { http } from ' node:http';



const server = http.createServer((req, res) => {
    // res.end (req.url);// to show the current url
    // console.log(req.url)

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home page');
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About page');
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact page');
    }
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
}
    //server function code
);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
