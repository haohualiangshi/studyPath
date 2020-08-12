/*
 * @Author: ahao 
 * @Date: 2020-08-11 13:58:26 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-12 10:44:30
 * es6函数式编程入门经典
 * 数学函数关键点：
 *  函数必须总是接受一个参数
 *  函数必须总是返回一个值
 *  函数应该依据接收到的参数而不是外部环境
 *  对于一个给定的x；只会输出唯一的y
 * 
 */

const { log } = console;
//  demo1 计税函数
// 依赖外部环境；并不能称之为函数
// const percentVal = 5;
// const calculateTax = value => {
//   return value / 100 * (100 + percentVal);
// }

// 改进1
const calculateTax = (value, percentVal) => {
  return value / 100 * (100 + percentVal);
}
log(calculateTax(5, 5));

// 函数的阶乘

const factorial = val => {
  let results = 1;
  while (val > 1) {
    results *= val;
    val--;
  }
  return results;
}
log(factorial(5));

log(Math.max(2, 3, 4, 5, 6));