/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-05-31 10:40:33
 * @LastEditors: ahao
 * @LastEditTime: 2021-05-31 10:45:12
 */
const person = {
    name: 'zqh',
    age: 20
}
const personProxy = new Proxy(person, {
    get(target, property) {
        return property in target ? target[property] : 'lml'
    },
    set() {}
})
console.log(personProxy.name1)