/*
 * @Descripttion: flow 类型推断和类型注解
 * @version: 
 * @Author: ahao
 * @Date: 2021-08-23 14:04:39
 * @LastEditors: ahao
 * @LastEditTime: 2021-08-23 14:09:53
 */
// @flow  类型推断
function test(str: string) {
    return str + str;
}
let num:number=100;
// test(num);
test('aa');
// 类型注解
function foo():string{
    return 'string'
}
