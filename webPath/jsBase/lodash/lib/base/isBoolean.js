/*
 * @Descripttion: 检测value是否是原始boolean类型或者对象
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-25 11:17:22
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-25 14:17:16
 */

import getTag from './getTag';
import isObjectLike from './isObjectLike';
const isBoolean = (value) => {
    return value === true || value === false || (isObjectLike(value) && getTag(value) === '[object Boolean]')
}

export default isBoolean;