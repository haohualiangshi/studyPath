/*二进制表示法*/
/*ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。*/
0b111110111 === 503 // true
0o767 === 503 // true
/*如果要将0b和0o前缀的字符串数值转为十进制，需要用到Number方法*/
Number('0b111');
Number('0o10');
/*ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。*/
/*ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
*/
/*Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。*/
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false
/*ES6在Number对象上面，新增一个极小的常量Number.EPSILON。Number.EPSILON的实质是一个可以接受的误差范围。*/

/*JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。*/

/*ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用。*/
/*Math.trunc方法用于去除一个数的小数部分，返回整数部分。*/
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
/*对于非数值，Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。*/


/*Math.sign方法用来判断一个数到底是正数、负数、还是零。

它会返回五种值。

参数为正数，返回+1；
参数为负数，返回-1；
参数为0，返回0；
参数为-0，返回-0;
其他值，返回NaN。*/
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN
/*Math.cbrt方法用于计算一个数的立方根。对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。*/
Math.cbrt(-1) // -1
Math.cbrt(0)  // 0
Math.cbrt(1)  // 1
Math.cbrt(2)  // 1.2599210498948734



/*JavaScript的整数使用32位二进制形式表示，Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0。对于小数，Math.clz32方法只考虑整数部分,对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。*/
Math.clz32() // 32
Math.clz32(NaN) // 32
Math.clz32(Infinity) // 32
Math.clz32(null) // 32
Math.clz32('foo') // 32
Math.clz32([]) // 32
Math.clz32({}) // 32
Math.clz32(true) // 31


/*Math.imul方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数。*/

/*Math.fround方法返回一个数的单精度浮点数形式。*/
/*Math.hypot方法返回所有参数的平方和的平方根。*/
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755
Math.hypot(-3);          // 3

/*ES6新增了4个对数相关方法。*/

/*ES6新增了6个三角函数方法。

Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）*/


/*ES2016 新增了一个指数运算符（**）。指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。*/