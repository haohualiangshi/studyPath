/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-14 13:47:04
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-14 14:14:56
 */
// const fs = require('fs');
// // 资源；获取cpu和内存
// console.log(process.memoryUsage());
// console.log(process.cpuUsage());


// 运行环境：运行目录；node环境；cpu架构；用户环境；系统架构

// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env);
// console.log(process.platform);

// 运行状态；启动参数；pid；运行时间
// console.log(process.argv);
// console.log(process.uptime());


// //事件

// process.on('exit', (code) => {
//     console.log('exit: ' + code);
//     // 内部只能执行同步代码
//     setTimeout(() => {
//         console.log(124);

//     }, 1000)
// })
// process.on('beforeExit', (code) => {
//     console.log('before exit: ' + code);

// })

// console.log('code finish')


// 标准输出；标准输入；错误
// console.log = function (data) {
//     process.stdout.write('----' + data + '\n');
// }
// console.log(11)

// process.stdin.pipe(process.stdout);