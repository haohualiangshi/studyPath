/*
 * @Descripttion: 获取toStringTag的值.
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-17 14:59:36
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 11:20:47
 */

function getTag(value) {
    // console.log(toString.call(value));
    return toString.call(value)
}
// console.log(getTag(null)); //"[object Null]"
// console.log(getTag(undefined)); //[object Undefined]
// console.log(getTag('ahao')); // [object String]
// console.log(getTag(NaN)); //    [object Number]
// console.log(getTag(true)); // [object Bolean]
// console.log(getTag(123)); //[object Number]
// console.log(getTag({ a: 1 })); //[object Object]
// console.log(getTag(new Map())); //[object Map]
// console.log(getTag(new Date())); // [object Date]

export default getTag;