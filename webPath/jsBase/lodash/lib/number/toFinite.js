/*
 * @Descripttion: 将一个值转换为有限的数值
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-21 14:31:14
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-22 17:29:08
 */
import toNumber from './toNumber'
const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e+308

function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        const sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER
    }
    return value === value ? value : 0
}
export default toFinite