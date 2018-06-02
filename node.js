const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer(function(req, res) {
    let data = '';
    req.on('data', function(chunk) {
        data += chunk;
    });

    req.on('end', function() {
        let method = req.method;
        let url = req.url;
        let headers = JSON.stringify(req.headers);
        res.writeHead(200, {
            'content-type': 'text/html'
        })
    })
})