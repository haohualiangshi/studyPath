/*
 * @Descripttion: 检测value是否是Array的类对象
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-23 17:46:37
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 17:55:27
 */

import getTag from './getTag';
import isObject from '../object/isObject';
const isArray = (value) => {
    return isObject(value) && getTag(value) === '[object Array]';
}

export default isArray;