/*
 * @Descripttion: 检测value是否是类数组
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-23 19:04:34
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 19:29:39
 */
import isLength from './isLength';
const isArrayLike = (value) => {
    return value != null && typeof value != 'function' && isLength(value.length);
}
export default isArrayLike;