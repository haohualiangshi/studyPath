/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-11 13:55:54
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 19:14:26
 */
function route(handler, pathname, response) {
    console.log('about to route a request for ' + pathname);
    if (typeof handler[pathname] === 'function') {
        return handler[pathname](response);
    } else {
        console.log('No request handler found for ' + pathname);
        // return "404 Not found";
        response.writeHeader(404, { "content-type": "text/json" });
        response.write('404 not found');
        response.end();
    }
}
exports.route = route;