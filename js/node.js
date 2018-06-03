var http = require('http');
var url = require('url');
var util = require('util');
const mysql = require('mysql');
var querystring = require('querystring');

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

    if (req.method.toLowerCase() == "get") { //Get请求

        var params = url.parse(req.url, true).query;
        var query = 'SELECT * FROM remindc where ID = ' + params.ID;

        connection.query(query, function(err, results, fields) {
            var key = results[0];
            if (!key) {
                res.write("无");
                res.end();
            } else {
                res.write(results[0].remin);
                res.end();
            }
        });

    } else { //Post请求
        var chunk = "";
        req.addListener("data", function(postchunkk) {
            chunk += postchunkk;
        });
        req.addListener("end", function() {
            var ss = querystring.parse(chunk);
            var query = 'SELECT * FROM remindc where ID = ' + ss.ID;
            connection.query(query, function(err, results, fields) {
                var key2 = results[0]
                if (key2) {
                    res.write("当天备忘录已存在");
                    res.end();
                } else {
                    var addSql = 'INSERT INTO remindc(ID,remin) VALUES(?,?)';
                    var addSqlParams = [ss.ID, ss.remind];
                    connection.query(addSql, addSqlParams, function(err, result) {
                        if (err) {
                            console.log('[INSERT ERROR] - ', err.message);
                            return;
                        } else {
                            res.write("成功");
                            res.end();
                        }
                    })
                }
            });
        })
    }
}).listen(8888);