// let命令的基本语法
// 1.let命令只在代码块内有效
{
    let a = 10;
    var b = 1;
}
console.log(b);
console.log(a)

// 在for循环内适合使用let指令,在循环中用var定义相当于全局变量，每次循环都会重新定义i,因此输出10;
// 使用let会使i只在本轮循环有效，每次循环i都是一个新的变量
var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function() {
//         console.log(i);
//     };
// }
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 10  //6
// for循环还有个特点就是for循环语句部分是一个作用域。循环体内部是一个单独的作用域
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
/*let指令不存在变量提升，因此，使用变量必须在声明后使用*/
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;


/*暂时性死区*/
var tmp = 123;
if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}
// 上述代码报错：ES6明确规定，如果区块中存在let和const命令，
// 这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
// 使用let指令意味着typeof操作符页不在安全，在声明之前就会报错
// 要注意js中的死区，有些死区比较隐蔽，不容易发现
function bar(x = y, y = 2) {
    return [x, y];
}
/*调bar函数就会出错，因为在使用y时y未声明*/
let x=x;/*上面代码报错，也是因为暂时性死区。使用let声明变量时，只要变量在还没有声明完成前使用，就会报错。上面这行就属于这个情况，在变量x的声明语句还没有执行完成前，就去取x的值，导致报错”x 未定义“。*/

/*let在相同的作用域内不允许重复声明同一个变量*/
function (){
	let a=10;
	var a=1;
}
function (){
	let a=10;
	let a=1;
}



// 不允许重复声明
function func(arg) {
  let arg; // 报错
}
// 因此，函数内部不能重新声明
// 但是可以重新划块进行声明
function func(arg) {
  {
    let arg; // 不报错
  }
}

/*块级作用域*/
/*在es5没有块的作用域会造成内层变量会覆盖外层变量*/
var tmp=new Date();
function f(){
	console.log(tmp);
	if(false){
		var tmp="hello world";
	}
}
f();//undefined,没有块的概念，设计变量提升

// 在循环体内造成用来计数的循环变量成为全局变量
var s="hello";
for(var i=0;i<s.length;i++){
	console.log(s[i]);
}
console.log(i);/*在此处，i会输出5*/

/*因此使用let时会为js新增块级作用域*/
function f1(){
	let n=5;
	if(true){
		let n=10;
	}
	console.log(n);
}

// 外层作用域无法读取内层作用域的变量；内层作用域可以定义外层作用域的同名变量

/*ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。因此规范自己的代码*/



/*do 表达式，使用let的块作用域本质是多个语句的封装，没有返回值，但现在的一个提案就是使用do表达式*/
let x = do {
  let t = f();
  t * t + 1;
};
/*上面代码中，变量x会得到整个块级作用域的返回值。*/





/*const命令  const声明一个只读的常量。一旦声明，常量的值就不能改变。对于const来说，只声明不赋值，就会报错。*/
/*const的作用域与let命令相同：只在声明所在的块级作用域内有效。*/
if (true) {
  const MAX = 5;
}
// const声明的常量，也与let一样不可重复声明。
/*ES6 声明变量的六种方法
ES5 只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有6种声明变量的方法。*/



// 顶层对象
/*顶层对象在浏览器环境指的window，在node指的是global对象，在es5中，顶层对象属性与全局变量挂钩
在es6中var和function依旧是顶层对象的属性，另一方面，let命令和const命令class命令不属于顶层对象的属性I*/




/*global对象*/
// 获取顶层对象的方法
// 方法1
(typeof window !=='undefined'?window:(typeof process==="object"&& typeof require==='function'&&typeof globle==='object')?global:this)
// 方法2
var getGlobal=function(){
	if(typeof self!=='undefined'){
		return self;
	}
	if(typeof window !=='undefined'){
		return window;
	}
	if(typeof global !=='undefined'){
		return global;
	}
	throw new Error('unable to locate global object');
};

// 默认值
// 解构赋值允许使用默认值
let [foo=true]=[];
console.info(foo);
/*es6中使用严格相等(===),判断一个位置是否有值。所以一个数组成员不严格相等undefined，默认值不会生效*/
let [x=1]=[undefined]
//默认值生效
let [y=1]=[null]//null
console.log(x,y);//1 null默认值未生效，null不严格等于undefined
// 如果默认值是表达式，那么表达式是惰性求值的，即只有在用到的时候才会求值
function f(){
	console.log('aaa');
	return "aaa";
}
let [x=f()]=[1];//严格相等undefined才会生效
console.info(x);
// 默认值可以引用解构赋值的其它变量，但该变量必须已经声明过




// 对象的解构赋值
// 
let {foo,bar}={foo:"aaa",bar:"bbb"};
console.info(foo,bar)
// 对象的结构赋值变量名必须与属性名相同
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined
// 对象的解构赋值的内部机制是先找到同名属性，然后再赋给对应的变量值；真正被赋值的是后者，不是前者
/*采用对象的解构赋值时变量的声明和赋值时是一体的，对于let和const来说。变量不能重复声明。所以，一旦赋值的变量以前声明过，就会报错*/

let foo;
let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"

let baz;
let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"
// 没有重新赋值时正确的
let foo;
({foo} = {foo: 1}); // 成功

let baz;
({bar: baz} = {bar: 1}); // 成功
console.log(foo,baz);

// 解构也能用于嵌套结构的对象