/*
 * @Descripttion: 创建nodeJs应用
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-08 15:06:24
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-08 15:09:40
 */
const http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World\n')
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888')