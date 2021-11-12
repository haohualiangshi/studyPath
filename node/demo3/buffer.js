const { parseInt } = require("lodash");

/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-12 00:04:03
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-12 10:50:23
 */

const bin = Buffer.from('Hey!')
console.log(bin[0].toString(16));
console.log(bin.toString('utf-8'));
const hello = Buffer.from('hello', "utf-8");
console.log(hello);