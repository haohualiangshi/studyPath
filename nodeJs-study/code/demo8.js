/*
 * @Descripttion: nodeJs路由
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-09 13:52:16
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-09 14:41:31
 */
const http = require('http');
const url = require('url');


const start = (route) => {
    const onRequest = (request, response) => {
        const pathname = url.parse(request.url).path;
        console.log('Request for ' + pathname + ' received.');
        console.log(route)
        route(pathname);
        response.writeHead(200, { "content-Type": "text/plain" });
        response.write('welcome connect meme');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}
exports.start = start