/*
 * @Author: ahao 
 * @Date: 2020-06-04 16:35:52 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-06-19 14:49:25
 */
/*
js的作用于有全局作用域、函数作用域、块级作用域（新增）
*/
// 此处用var声明的是全局变量;因此只会执行一遍内循环；一次外循环

// for (var i = 0; i < 3; i++) {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//   }
//   console.log('内层结束', i)
// }

/** 1 使用let来声明块级作用域;这样内层的i和外层的i不会相互干扰
 *  2 使用let来声明的计数器 i 相当于在块内部声明了个局部变量
 *  3 let不存在变量提升
 */ 
// for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }
//   console.log('内层结束', i)
// }
