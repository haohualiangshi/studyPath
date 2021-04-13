/*
 * @Descripttion: 模块系统；exports和require两个对象；exports是模块公开的接口；require用于从外部获取一个模块的接口
 * @version: 
 * @Author: ahao
 * @Date: 2021-04-09 13:40:31
 * @LastEditors: ahao
 * @LastEditTime: 2021-04-09 13:46:56
 */
// const Hello = () => {
//     let name = '';
//     this.setName = (thyName) => {
//         name = thyName;
//     };
//     this.sayHello = () => {
//         console.log('Hello ' + name);
//     }
// }

function Hello() {
    let name = '';
    this.setName = (thyName) => {
        name = thyName;
    };
    this.sayHello = () => {
        console.log('Hello ' + name);
    }
}
module.exports = Hello;