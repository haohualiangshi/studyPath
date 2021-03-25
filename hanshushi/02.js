/*
 * @Author: ahao 
 * @Date: 2020-08-05 11:09:54 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-05 14:02:53
 * 闭包：函数与其周围的状态的引用捆绑在一起形成闭包
 * 作用：可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员
 * 
 * 纯函数：相同的输入永远得到相同的输出
 * lodash是一个纯函数的功能库；提供了对数组/数字/对象/字符串/函数等操作的一些方法
 * 数组的slice和splice分别是纯函数和不纯的函数
 */
const { log } = console;

function makeFn () {
  const msg = 'hello world';
  return function () {
    log(msg);
  }
}
const fn1 = makeFn();
fn1();


// slice  splice
let arr = [1, 2, 3, 4, 5];
// 纯函数
log(arr.slice(0, 3));
log(arr.slice(0, 3));
log(arr.slice(0, 3));
log(arr);
// 不纯的函数
log(arr.splice(0, 3));
log(arr);
log(arr.splice(0, 3));
log(arr);
