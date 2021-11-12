

/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-12 23:17:17
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-13 00:12:29
 */
// console.log(11);
// import { e } from 'express';
const express = require('express');
// 同一层级下ts文件不可与ts文件同名；当前环境下默认找json文件
import { DataStore } from './data';
console.log(DataStore.list);
const app = express();
app.get('/', (request, response) => {
    console.log(request.headers.host + request.url);
    // response.end('123')
    response.json(DataStore.list);
})
app.listen(8080, () => {
    console.log('8080 post serve has started')
})