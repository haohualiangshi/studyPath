/*
 * @Author: ahao 
 * @Date: 2020-08-06 14:34:59 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-07 16:25:44
 * 柯里化
 */
const { log } = console;
//  使用柯里化解决代码里硬编码的问题
// function checkAge (age) {
//   const ageStarde = 18;
//   return age >= ageStarde;
// }

// 普通的纯函数
// function checkAge (min, age) {
//   return age >= min;
// }

// function checkAge (min) {
//   return function (age) {
//     return age >= min;
//   }
// }

const checkAge = min => (age => age >= min);
const checkAge18 = checkAge(18);
const checkAge20 = checkAge(20);
log(checkAge18(19));
log(checkAge20(19));



/****
 * lodash 中的curry基本使用:使用一个函数；参数传齐立即执行；否则则返回一个函数用于接受剩余参数
 * 
 */
const _ = require('lodash');
function getSum (a, b, c) {
  return a + b + c;
}
const curried = curry(getSum);
log(curried(1, 2, 3));
log(curried(1)(2)(3));

// curry的实现
function curry (func) {
  return function curriedFn (...args) {
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      }
    }
    return func(...args);
  }
}
/****
 * 柯里化总结
 * 可以让我们给函数较少的参数得到一个已经记住了某些固定参数的新函数
 * 对函数参数的缓存
 * 让函数变得更灵活；让函数的粒度更小
 * 可以把函数装换成一元函数。可以组合使用函数产生更大的功能
 */

/****
 * 组合函数
 * 纯函数和柯里化很容易写出‘洋葱代码’；因此使用组合函数可以让我们把颗粒度的函数重新组合生成一个新函数
 * 函数组合默认是从右到左执行的
 * 
 */

//  简单的函数组合的实现
const compose = (lastFn, reverseFn) => (value => lastFn(reverseFn(value)));
const reverseFn = arr => arr.reverse();
const lastFn = arr => arr[0];
const arr = [1, 3, 5, 6];
const composeFn = compose(lastFn, reverseFn);
log(composeFn(arr));

/****
 * lodash中的组合函数
 * lodash中的flow和flowRight都可以组合多个函数
 * flow是从左到右
 * flowRight()是从右到左运行；使用的更多些
 */
const strArr = ['a', 'b', 'c'];
const toUpper = str => str.toUpperCase();
const compose1 = (...args) => (value => args.reverse().reduce((acc, fn) => (fn(acc)), value));
const f = compose1(toUpper, lastFn, reverseFn);
log(f(strArr));

// function compose1 (...args) {
//   return function (value) {
//     return args.reverse().reduce(function (acc, fn) {
//       return fn(acc)
//     }, value);
//   }
// }

// 函数组合要满足结合律

