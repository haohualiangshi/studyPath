/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-11 12:22:31
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 19:12:02
 */
const http = require('http');
const url = require('url');

function start(route, handler) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        // console.log('pathname:' + pathname);
        // const content = route(pathname, handler);
        // response.writeHead(200, { "content-type": "text/plain" });
        // response.write(content);
        // response.end();

        route(handler,pathname,response);
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started')
}
exports.start = start;