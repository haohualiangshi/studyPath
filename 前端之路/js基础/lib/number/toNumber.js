/*
 * @Descripttion: 将传入值转为数字
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-17 22:39:38
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-21 14:27:01
 */

import isObject from '../object/isObject';
import isSymbol from '../symbol/isSymbol';

const NAN = 0 / 0;
const reTrim = /^s+|s+$/g;
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const freeParseInt = parseInt;
const toNumber = (val) => {
    const type = typeof val;
    if ('number' === type) {
        return val;
    }
    if (isSymbol(val)) {
        return NAN;
    }
    if (isObject(val)) {
        const other = typeof val.valueOf === 'function' ? val.valueOf() : val;
        val = isObject(other) ? `${other}` : other
    }
    if (typeof val !== 'string') {
        return val === 0 ? val : +val;
    }
    val = val.replace(reTrim, '');
    const isBinary = reIsBinary.test(val);
    return (isBinary || reIsOctal.test(val)) ? (freeParseInt(val.slice(2), isBinary ? 2 : 8)) : reIsBadHex.test(val) ? NAN : +val;
}

export default toNumber