/*es6 默认使用严格模式
变量必须声明后再使用
函数的参数不能有同名属性
不能使用with语句
不能对只读属性赋值
不能使用前缀0表示八进制，否则报错
不能删除不可删除的属性
不能删除delete prop，会报错，只能删除delete global[prop]
eval不会在他的外层作用域引入变量
eval和arguments不能被重新赋值
arguments不能自动反应函数参数的变化
不能使用arguments.callee
不能使用arguments.caller
禁止this指向全局对象
不能使用fn.caller和fn.arguments获取函数调用的堆栈


*/
// export var firstName='Michael';
// export var lastName='Jackson';
// export var year=1958;

// var firstName='Michael';
// var lastName='Jsonson';
// var year=1958;
// export{firstName,lastName,year};


// export var foo='bar';
// setTimeout(()=>foo='baz',500);

import {firstName,lastName,year} from './module1';
function setName(element){
	element.textContent=firstName+' '+lastName;
	console.log(element.textContent);
}