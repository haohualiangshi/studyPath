/*
 * @Descripttion: 检测value是否为有效的类数组长度
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-23 19:06:09
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 19:27:16
 */
const MAX_SAFE_INTEGER = 9007199254740991;
const isLength = (value) => {
    const type = typeof value;
    return type === 'number' && value > -1 && value % 1 === 0 && value < MAX_SAFE_INTEGER;
}
export default isLength;