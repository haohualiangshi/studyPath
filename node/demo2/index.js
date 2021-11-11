/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-11 13:58:44
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-11 22:36:32
 */
const server = require('./demo2');
const router = require('./router');
const requestHandlers = require('./requestHandlers');
const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
server.start(router.route, handle);