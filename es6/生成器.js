/*
 * @Author: ahao 
 * @Date: 2020-08-14 14:04:57 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-17 15:12:55
 * 生成器：生成器函数是ES6提供的一种异步编程解决方案；语法行为与传统函数完全不同
 * 
 */
const { log } = console;

// yield相当于代码里的分隔符（断点）通过next()执行
function* gen () {
  log(111);
  yield "我是一只小青蛙";
  log(222);
  yield '呱呱呱呱呱';
  log(333);
}
const iterate = gen();
// log(iterate);
// log(iterate.next());
// log(iterate.next());
// log(iterate.next());
// log(iterate.next());

// 生成器函数参数
function* gen1 (args) {
  log(args);
  const yield1 = yield 1111;
  log(yield1)
  const yield2 = yield 2222;
  log(yield2);
  const yield3 = yield 3333;
  log(yield3);

}
// 获取迭代器对象
const iterator1 = gen1("test");
// log(iterator1.next("zhang"))
// log(iterator1.next("qing"))
// log(iterator1.next("hao"))

// 异步编程；文件操作，网络操作和数据库操作 

// 异步举例
const one = () => {
  setTimeout(() => {
    log(111)
    iterator.next();
  }, 1000)
}
const two = () => {
  setTimeout(() => {
    log(222)
    iterator.next();
  }, 2000)
}
const three = () => {
  setTimeout(() => {
    log(333)
  }, 1000)
}
function* gen2 () {
  yield one();
  yield two();
  yield three();
}

const iterator = gen2();
iterator.next();

