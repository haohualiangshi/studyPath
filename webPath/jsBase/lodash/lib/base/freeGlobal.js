/*
 * @Descripttion: 从Node.js中检测自由变量`global`
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-25 17:09:23
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-25 19:46:49
 */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global;
export default freeGlobal;