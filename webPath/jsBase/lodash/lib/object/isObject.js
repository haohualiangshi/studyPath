/*
 * @Descripttion: 判断是否是对象
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-17 14:48:02
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-17 15:09:58
 */

const isObject = (value) => {
    const type = typeof value;
    return value != null && ('object' === type || 'function' === type);
}

export default isObject;