/*
 * @Descripttion: 检测value是否是类对象；如果一个值是类对象；那么它不应该是null
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-23 16:02:58
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-23 16:14:18
 */

const isObjectLike = (value) => {
    return typeof value === 'object' && value !== null;
}
export default isObjectLike;