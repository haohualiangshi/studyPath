/*
 * @Descripttion: 事件循环
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-08 15:42:34
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-08 16:09:24
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();
const connectHanler = () => {
    console.log('连接成功');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHanler);

eventEmitter.on('data_received', () => { console.log('数据接收成功') });

eventEmitter.emit('connection');
console.log('程序执行完毕');