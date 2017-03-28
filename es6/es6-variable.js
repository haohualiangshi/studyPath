// 数组的解构赋值
// es6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
let [a,b,c]=[1,2,3];
console.log(a,c);//1,3
// 本质上这种写法属于“模式匹配”，只要两边的模式相同，左边的变量就会被赋予对应的值
let [foo,[[bar],baz]]=[1,[[2],3]]
console.log(foo,bar)
// 如果解构不成，变量的值就等于undefined
// 如果等号右边的不是数组（或者严格的说不是可便利的结构）那么将会报错
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
let [foos] = "ert"//e，可便利
// 只要某种数据结构具有Iterator接口，都可以采用数组形式的赋值
