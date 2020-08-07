/*
 * @Author: ahao 
 * @Date: 2020-08-06 14:34:59 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-07 20:56:47
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


/****
 * pointfree:我们可以把数据处理的过程定义成与数据无关和合成运算；不需要用到代表数据的那个参数；
 * 只要把简单的运算步骤合成到一起；在使用这种模式之前我们需要定义一些辅助的基本运算函数
 * 
 */
const fp = require('lodash/fp');

const f1 = fp.flowRight(fp.replace(/\s+/g, "_"), fp.toLower);
log(f1('HELLO     WORLD'));


// const firstLeterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '));
const firstLeterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))
log(firstLeterToUpper('world wild web'));


/****
 * functor 函子
 * 容器：包含值和值的变形关系（这个变形关系就是函数）
 * 函子：是一个特殊的容器；通过一个普通的对象来实现；该对象具有map方法；map方法可以运行一个函数对值进行处理
 *
 */

// class Container {
//   constructor(val) {
//     this._val = val;
//   }
//   map (fn) {
//     return new Container(fn(this._val));
//   }
// }
// let r = new Container(5).map(x => x + 1).map(x => x * x);
// log(r);

// 避免多次使用new
class Container {
  static of (val) {
    return new Container(val);
  }
  constructor(val) {
    this._val = val;
  }
  map (fn) {
    return Container.of(fn(this._val));
  }
}

const r = Container.of(5).map(x => x + 1).map(x => x * x);
log(r);

/****
 * 函子总结
 * 函数式编程的运算不直接操作值；而是由函子完成
 * 函子就死机一个实现了map契约的对象
 * 我们可以把函子想象成一个盒子；这个盒子里封装一个值
 * 想要处理盒子中的值；我们需要给盒子的map方法场地一个处理值的函数（纯函数）；由这个函数对值进行处理
 * 最终map方法返回一个包含新值的盒子（函子）
 */

// 演示函子里传入null或者undefined的问题；MayBe函子

class MayBe{
  static of(val){
    return new MayBe(val);
  }
}