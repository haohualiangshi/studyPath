/*
 * @Descripttion: 回调函数
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-08 15:14:32
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-08 15:23:10
 */
const fs = require('fs');
/**
 * 阻塞代码示例
 */
// const data = fs.readFileSync('../source/input.txt');
// console.log(data.toString());
// console.log('程序执行结束');

/**
 * 非阻塞式示例
 */
fs.readFile('../source/input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    } else {
        console.log(data.toString())
    }
})
console.log("程序执行结束");