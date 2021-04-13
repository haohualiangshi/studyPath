/*
 * @Author: ahao 
 * @Date: 2020-08-05 15:38:16 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-06 14:29:03
 * lodash的基本使用
 */
const _ = require('lodash');
const arr = [1, 2, 3, 4.2, 5];
const { log } = console;

log(_.chunk(arr, 2));
log(_.compact([1, 0, 2, undefined, 3, false, 4, NaN, 5, null, '', 7]))
log(_.concat(arr, 2, 3, [5, 6, 7]));
log(_.difference([1, 2, 3], [3]));
log(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.ceil));
log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
const obj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
log(_.differenceWith(obj, [{ 'x': 1, 'y': 2 }], _.isEqual));
log(_.drop(arr, 2));
log(_.dropRight(arr, 2));

// 记忆函数
const getArea = r => {
  log(r);
  return Math.PI * r * r
};
// const getAreaWithMemory = _.memoize(getArea);
// log(getAreaWithMemory(4));
// log(getAreaWithMemory(4));
// log(getAreaWithMemory(4));



// memoize实现原理

function memoize (f) {
  let cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    log(key,cache);
    cache[key] = cache[key] || f.apply(f, arguments);
    return cache[key];
  }
}
const getAreaWithMemory = memoize(getArea);
log(getAreaWithMemory(4));
log(getAreaWithMemory(4));
log(getAreaWithMemory(5));
log(getAreaWithMemory(6));
