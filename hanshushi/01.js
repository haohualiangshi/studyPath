/*
 * @Author: ahao 
 * @Date: 2020-08-04 15:41:37 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-05 11:07:45
 * 高阶函数
 * 可以把函数作为一个参数传递给另一个参数
 * 可以把函数作为另外一个函数的返回结果
 */
// 函数作为参数
const { log } = console
function forEach (array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}
const arr = [1, 2, 3, 4];
forEach(arr, function (item) {
  log(item);
})

function filter (array, fn) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      results.push(array[i]);
    }
  }
  return results;
}

log(filter(arr, function (item) {
  return item % 2 === 0
}))

// 函数作为返回值
function makeFn () {
  const msg = 'hello message';
  return function () {
    log(msg);
  }
}
// const fn = makeFn();
// fn()

makeFn()()

// once 函数
function once (fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  }
}

const pay = once(function (money) {
  log(`支付：${money} RMB`);
})
pay(5);
pay(5);

// 模拟常用高阶函数：map/every/some
const map = (array, fn) => {
  let results = [];
  for (let value of array) {
    results.push(fn(value));
  }
  return results;
}
log(map(arr, v => v * v));

// every
const every = (array, fn) => {
  let result = true;
  for (let value of array) {
    result = fn(value);
    if (!result) {
      break;
    }
  }
  return result;
}

log(every(arr, v => v > 1));
log(every(arr, v => v > 0));

// some
const some = (array, fn) => {
  let result = false;
  for (let value of array) {
    result = fn(value);
    if (result) {
      break;
    }
  }
  return result;
}
log(some(arr, v => v > 10));
log(some(arr, v => v > 1));