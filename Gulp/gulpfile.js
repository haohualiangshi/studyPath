/*
 * @Descripttion: gulp的入口文件
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-13 15:46:34
 * @LastEditors: ahao
 * @LastEditTime: 2021-10-14 15:29:52
 */
// 1 创建任务
// exports.foo = (done) => {
//     console.log('foo task working~');
//     // 在gulp中模式都是异步执行；需要结束标识
//     done();
// }
// exports.default=done=>{
//     console.log('default task working~');
//     done()
// }

// 2 Gulp组合任务(创建串行任务和并行任务)
// const { series, parallel } = require('gulp');
// const task1 = done => {
//     setTimeout(() => {
//         console.log('task1 working~');
//         done();
//     }, 1000)
// }

// const task2 = done => {
//     setTimeout(()=> {
//         console.log('task2 working~');
//         done();
//     }, 1000)
// }

// const task3 = done => {
//     setTimeout(() => {
//         console.log('task3 working~');
//         done()
//     }, 1000)
// }

// exports.foo = series(task1, task2, task3);
// exports.bar = parallel(task1, task2, task3);


// 3 gulp的三种异步任务方式

// // 01 回调函数方式；错误优先
// exports.callback = done => {
//     console.log('callback task~');
//     done();
// }
// exports.callback_error = done => {
//     console.log('callback error task~');
//     done(new Error('task failed'));
// }

// // 02 使用promise方法
// exports.promise = () => {
//     console.log('promise task~');
//     return Promise.resolve()
// }
// exports.promise_error = () => {
//     console.log('promise task~');
//     return Promise.reject(new Error('task failed~'));
// }


// // 03 使用async和await
// const timeout = time => {
//     return new Promise(resolve => {
//         setTimeout(resolve, time);
//     })
// }
// exports.async = async () => {
//     await timeout(1000);
//     console.log('async task~');
// }


// gulp构建过程核心原理（读取流。转换流，写入流）；文件操作API+插件的使用
// const fs = require('fs');
// const { Transform } = require('stream');
// const { src, dest } = require('gulp');
// const { chunk } = require('lodash');
// exports.opreate_core = () => {
//     // 读取文件流
//     const read = fs.createReadStream('bootstrap.css');
//     // 写入文件流
//     const write = fs.createWriteStream('bootstrap.min.css');
//     // 文件流转换
//     const transform = new Transform({
//         transform: (chunk, encoding, callback) => {
//             // 核心转换过程实现
//             // chunk=>读取流中读取到的内容（Buffer）
//             const input = chunk.toString();
//             const output = input.replace(/\s{2}/g, '').replace(/\/\*.+?\*\//g, '');
//             // 错误优先，因此第一个参数传null
//             callback(null, output);
//         }
//     })
//     read.pipe(transform).pipe(write);
//     return read
// }


// const { src, dest } = require('gulp');
// const cleanCss = require('gulp-clean-css');
// const rename=require('gulp-rename');
// exports.operate_file = () => {
//     return src('src/*.css').pipe(cleanCss()).pipe(rename({extname:'.min.css'})).pipe(dest('dist'))
// }