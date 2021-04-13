/*
 * @Descripttion: 整合路由和server服务
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-09 14:18:18
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-09 14:28:32
 */

const server = require('./demo8');
const router = require('./demo9');
console.log(router);
server.start(router.route);