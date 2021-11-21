/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-14 20:37:00
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-21 10:44:52
 */
const path = require('path');
console.log(__filename);
// 获取路径中的基础名称；返回路径中的最后一个
/****
1. 返回的是接收路径中的最后一部分
2。 第二个参数表示扩展名，如果说没有设置则返回完整的文件名称带后缀
3. 第二个参数作为后缀时；如果没有在当前路径中被匹配到；那么就会忽略
4. 处理目录路径的时候如果说结尾处有路径分隔符；则也会被忽略掉

*/
// console.log(path.basename(__filename));
// console.log(path.basename(__filename,".js"));
// console.log(path.basename(__filename,".css"));
// console.log(path.basename('a/a/b/c'));



// 获取路径目录名(目录的路径)

// console.log(path.dirname(__filename));

// 获取路径的扩展名
// console.log(path.extname(__filename));
// console.log(path.extname('a/b/c/d.html.js.css'))

// 解析路径
const pathObj = path.parse("d:/ahao/studyPath/node/demo7/path.js")
console.log(pathObj);
const pathFormat = path.format(pathObj);
console.log(pathFormat);