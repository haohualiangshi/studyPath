/*
 * @Descripttion: node demo1
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-09 18:02:05
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 12:22:36
 */
var http = require('http');

// 调用http模块提供的函数： createServer 。这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
server = http.createServer(function (req, res) {
    res.writeHeader(200, { "Content-Type": "text/plain" });
    res.write('Hello World');
    res.end(' this is a test');
});
server.listen(8888);