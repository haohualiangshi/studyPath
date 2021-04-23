/*
 * @Descripttion: 检测value值是否是一个类的arguments对象
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-23 16:25:29
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 16:31:21
 */
import getTag from './getTag';
import isObjectLike from './isObjectLike';
const isArguments = (value) => {

    return isObjectLike(value) && getTag(value) === '[object Arguments]';
}
export default isArguments;