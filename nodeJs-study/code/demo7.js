/*
 * @Descripttion: 使用require方法导入定义的模块
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-09 13:44:09
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-09 13:45:54
 */
const Hello = require('./demo6');
const hello = new Hello();
hello.setName('ahao');
hello.sayHello();