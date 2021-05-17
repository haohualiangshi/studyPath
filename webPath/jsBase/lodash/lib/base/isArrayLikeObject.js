/*
 * @Descripttion: 检测value是否是类数组；还检查value是否是个对象
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-25 11:04:39
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-25 11:13:15
 */

import isArrayLike from './isArrayLike';
import isObjectLike from './isObjectLike';

const isArrayLikeObject = (value) => {
    return isObjectLike(value) && isArrayLike(value);
}
export default isArrayLikeObject;