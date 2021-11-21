/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-14 10:30:06
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-14 10:34:48
 */
// console.info(global);
// console.log(__filename);
// console.log(__dirname);

// 默认情况this是空对象；和global并不是一样的
// console.log(this)
console.log(this === global);
(function () {
    console.log(this)
    console.log(this === global);
})()