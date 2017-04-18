
/*Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。*/
let arrayLike={
	'0':'a',
	"1":'b',
	'2':'c',
	length:3
};
// es5的转化方法
var arr1=[].slice.call(arrayLike);
let arr2=Array.from(arrayLike);
console.log(arr2);
/*实际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。*/
/*只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。*/
/*扩展运算符（...）也可以将某些数据结构转为数组。扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换*/
/*Array.from方法则是还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。*/
/*Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。*/


/*Array.of方法用于将一组值，转换为数组。主要作用是解决Array()方法和new Array()带来的差异*/

Array.of(3,11,8);


/*数组实例的copyWithin()方法*/
Array.prototype.copyWithin(target, start = 0, end = this.length)

/*它接受三个参数。

target（必需）：从该位置开始替换数据。
start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
这三个参数都应该是数值，如果不是，会自动转为数值。*/

[1,2,3,4,5,6,7,8,9].copyWithin(0,6);
// [7, 8, 9, 4, 5, 6, 7, 8, 9]
// 将复制位置的值进行替换
// [1,2,3,4,5,6,7,8,9].copyWithin(8,6);
// [1, 2, 3, 4, 5, 6, 7, 8, 7]
/*数组实例的find()和findIndex() */
/*数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。*/
[1, 4, -5, 10].find((n) => n < 0)
/*-5*/
/*数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。*/
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2


/*数组实例的fill，fill方法是哟你个给定值填充一个数组*/
['a','b','c'].fill(7);
/*fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。*/



/*ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。*/



/*数组实例includes()方法;Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。*/
[1,2,3].includes(2);
[1,2,3].includes(5);


/*数组的空位*/
/*数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位。*/
Array(3) // [, , ,]
/*空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。*/
0 in [undefined, undefined, undefined] // true
0 in [, , ,] // false