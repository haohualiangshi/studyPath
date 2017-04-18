function log(x,y='world'){
	console.log(x,y);
};
log('hello');


function foo(x=5){
	const x=10;/*error*/
	/*参数变量是默认声明，不能使用let或const重复声明*/
}
/*函数的length属性,用于指定没有设置默认值的参数的个数，*/
(function a(a){}).length/*1*/
(function a(a=1){}).length/*0*/
/*如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了*/



/*作用域。函数进行声明时会生成单独的作用域*/


/*rest参数，ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。*/
function push(array,...items){
	items.forEach(function(item){
		array.push(item);
	});
	console.log(array);
}
var a=[];
push(a,1,3,5,8)

/*扩展运算。扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列*/

console.log(1,...[2,3,3,4],6)

/*扩展运算符的应用*/
/*1.合并数组*/

[1,2,...[3,5,7,,,,,,8]]/*空的转为undefined*/
// 与结构赋值相结合
[a,...rest]=["a","b","c","d"]


/*箭头函数*/
var f=v=>v;
var f=function(v){
	return v;

}

var f=()=>5;
var f=function(){
	return 5;
}
var sum=(num1,num2)=>num1+num2;
var sum=function(num1,num2){
	return num1+num2;
}