const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', (err, contents) => {
        res.end(contents);
    });
}).listen(3000);