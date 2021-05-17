/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-25 19:50:55
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-25 19:59:27
 */
import freeGlobal from './freeGlobal';
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis;
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self;
const root = freeGlobalThis || freeSelf || freeGlobal || Function('return this')();