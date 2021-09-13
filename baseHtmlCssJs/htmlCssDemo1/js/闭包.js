/*
 * @Descripttion: 理解闭包的执行和回收
 * @version: 
 * @Author: ahao
 * @Date: 2021-09-10 14:24:17
 * @LastEditors: ahao
 * @LastEditTime: 2021-09-10 14:26:04
 */
let a = 10;
function foo(a) {
    return function (b) {
        console.log(b + (++a));
    }
}
let fn = foo(10)
fn(5);
foo(6)(7);
fn(20);
console.log(a);