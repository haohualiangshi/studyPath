/*
 * @Descripttion: Stream(流)
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-09 11:09:12
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-09 13:36:12
 */
/****
 * stream读出操作
 */
const fs = require("fs");
let data = '';
const readStream = fs.createReadStream("../source/input.txt");
readStream.setEncoding('utf-8');
readStream.on('data', (chunk) => {
    data += chunk;
});
readStream.on('end', () => {
    console.log(data);
});
readStream.on('error', (err) => {
    console.log(err.stack);
})
console.log('程序执行完毕！')

/*****
 * stream 写入操作
 */

const writeStr = "这是我的一个测试字符串";
const writerStream = fs.createWriteStream('../source/output.txt');
writerStream.write(writeStr, 'UTF8');
writerStream.on('finish', () => {
    console.log('写入完成');
});
writerStream.on('error', (err) => {
    console.log(err.stack);
})
console.log('程序执行完毕！');


/*****
 * 文件内容的赋值操作
 */
const fileRead = fs.createReadStream('../source/input.txt');
const fileContentWrite = fs.createWriteStream('../source/copyContent.txt');
fileRead.pipe(fileContentWrite);
console.log('process finished');