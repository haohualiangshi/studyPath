/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-11 12:22:31
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 22:48:45
 */
const http = require('http');
const url = require('url');


function start(route, handler) {
    function onRequest(request, response) {
        // const pathname = url.parse(request.url).pathname;
        // console.log('pathname:' + pathname);
        // const content = route(pathname, handler);
        // response.writeHead(200, { "content-type": "text/plain" });
        // response.write(content);
        // response.end();

        // route(handler,pathname,response);

        // let postData = '';
        // const pathname = url.parse(request.url).pathname;
        // request.setEncoding('utf8');
        // request.addListener('data', function (postDataChunk) {
        //     postData += postDataChunk;
        //     console.log('Received POST data chunk: ' + postDataChunk)
        // });
        // request.addListener('end', function () {
        //     route(handler, pathname, response, postData);
        // })


        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handler, pathname, response, request);




    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started')
}
exports.start = start;