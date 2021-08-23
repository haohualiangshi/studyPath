/*
 * @Author: ahao 
 * @Date: 2020-07-21 16:22:18 
 * @Last Modified by: ahao
 * @Last Modified time: 2020-07-21 16:50:20
 * 字符串的扩展
 */
// 1.字符的unicode表示法
const { log } = console;
log("\u0040");
// 超\uffff需要使用双字节
log("\ud842\udfb7");
// 大括号表示双字节
log("\u{20bb7}")

// 增强unicode后一共有6种方式
log('\z' === 'z');
log('\172' === 'z');
log('\x7a' === 'z');
log('\u007a' === 'z');
log('\u{7a}' === 'z');

for (let codePoint of 'zhan') {
    log(codePoint);
}
// for ...of 遍历最大的优点可以识别大于oxffff的码点
const text = String.fromCodePoint(0x20bb7);
for (let i = 0; i < text.length; i++) {
    log(i, text[i])
}
for (let i of text) {
    log(i)
}
// 反引号的模版字符串
log(`zhang
qing 
hao`)
const addr = "heNan";
// log(`home is ${addr}`)
// console.log `home is ${addr} ,and .`
function myTagFun(strings, addrVal) {
    console.log(strings);
    console.log(addrVal)
}
myTagFun `this is ${addr}.`;