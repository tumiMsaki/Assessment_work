var http = require('http');
var url = require('url');
var util = require('util');
const mysql = require('mysql');

var connection = mysql.createConnection({ //配置连接参数
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    database: 'remind'
});

connection.connect();

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
    })

    var params = url.parse(req.url, true).query;
    console.log(params);


    var query = 'SELECT * FROM remindc where ID = ' + params.ID;

    connection.query(query, function(err, results, fields) {
        if (err) {
            console.log(err);
        } else {
            res.write(results[0].remin);
            res.end();
        }
    })

}).listen(8888);