/*
 * @Descripttion: EventEmitter类
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-08 17:31:48
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-08 17:37:57
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('some_event', () => {
    console.log('some_event事件触发');
})
setTimeout(() => {
    eventEmitter.emit('some_event')
}, 2000)