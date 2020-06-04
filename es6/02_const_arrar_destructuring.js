/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-06-04 16:54:05 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-06-04 17:12:00
 * const声明变量必须声明赋值和数组的结构
 */
const a = "zhang";
console.log(a);
// a="zz";
const b = {};
b.name = "hao";
console.log(b);
/****
 * 使用const声明的变量不允许内存指向发生更改；因此对于const声明的数组或者对象添加修改属性并不会报错
 */

/****
 * 数组的解构
 */
const arr = [1, 2, 3];
// const [foo, bar, baz] = arr;
// console.log(foo,bar,baz);

// const [,,baz]=arr;
// console.log(baz)

// const [foo,...baz]=arr;
// console.log(baz)

const str = "foo/bar/baz";
// const temArr = str.split("/");
// console.log(temArr);
const [, , baz] = str.split("/");
console.log(baz)
