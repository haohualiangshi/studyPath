/*
 * @Descripttion: 检测传入值是否是symbol
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-17 22:17:58
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-17 22:30:58
 */

import getTag from '../../base/getTag';

const isSymbol = (val) => {
    const type = typeof val;
    return type === 'symbol' || (type === 'object' && val !== null && getTag === '[object Sysbol]')
}

// console.log(isSymbol(Symbol({ a: 1 })));
// console.log(isSymbol({ a: 1 }));
// console.log(isSymbol(null))

export default isSymbol