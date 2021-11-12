/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-12 15:28:40
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-12 15:31:17
 */
const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('event1', () => {
    console.log('do event1')
})
myEvent.emit('event1');