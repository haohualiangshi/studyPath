/*
 * @Author: ahao 
 * @Date: 2020-08-10 15:21:25 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-08-11 13:57:32
 * falktale中的Task函子
 */
const fs = require('fs');
const { log } = console;
const { task } = require('folktale/concurrency/task')
const { split, find } = require('lodash/fp')
// log(fs);


const readFile = fileName => {
  return task(resolver => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) resolver.reject(err);
      resolver.resolve(data);
    })
  })
}

readFile('package.json')
  .map(split('\n'))
  .map(find(x => x.includes('version')))
  .run()
  .listen({
    onRejected: err => {
      log(err)
    },
    onResolved: data => {
      log(data);
    }
  })

/****
 * Pointed函子是实现了of静态方法的函子
 * of方法是为了避免使用new来创建对象；更深层的含义是of方法用来把值放到上下文context
 */

/*****
 * io函子的问题
 * 
 */
class IO {
  static of (val) {
    return new IO(function () {
      return val;
    })
  }
  constructor(fn) {
    this._val = fn;
  }
  map (fn) {
    return new IO(fp.flowRight(fn, this._val));
  }
}