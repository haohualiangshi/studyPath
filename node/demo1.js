/*
 * @Descripttion: node demo1
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-09 18:02:05
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-09 18:03:43
 */
var http = require('http');
server = http.createServer(function (req, res) {
res.writeHeader(200, {"Content-Type": "text/plain"});
res.end("Hello W3Cschool\n");
});
server.listen(8000);
console.log("httpd start @8000");