/*
 * @Descripttion: 将参数值转为整数
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-22 13:56:55
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-22 13:59:07
 */

import toFinite from './toFinite';
const toInteger = (value) => {
    const result = toFinite(value);
    const remainder = result % 1;
    return remainder ? result - remainder : result;
}