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

