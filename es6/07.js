/*
 * @Author: ahao 
 * @Date: 2020-08-24 11:02:50 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-24 15:26:32
 * Promise
 */

const { log } = console;
// import { fs } from 'fs';
const fs = require("fs");
// const p1 = new Promise((resolve, reject) => {
//   const data = "数据库的用户数据";
//   reject(data);
// })
// log(p1);
// log(p1.then((value) => {
//   log(value);
// }, (error) => {
//   log("error",error);
// }))

const p2 = new Promise(function (resolve, reject) {
  fs.readFile('./package.json', function (err, data) {
    if (err) reject(err);
    resolve(data);
  })

})
p2.then(function (data) {
  log(data.toString());
}, function (reason) {
  log(reason);
});

