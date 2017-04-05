// 1。字符的Unicode表示法
// 采用unicode编码形式的\uxxxx表示一个字符。超出一个字符的采用双字节显示
/*es6做出的改进，只要将码点放入大括号即可*/
"\u{20bb7}"
"\u{41}\u{42}\u{43}"
'\u{1F680}' === '\uD83D\uDE80'


/*codePointAt()ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。*/
var s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97



/*在使用codePointAt方法时仍然不能正确的返回指定位置的额编码*/
/*可以使用for...of循环，它能够正确识别32位的UTF-16字符*/
var s = '𠮷a';
for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16))
}
// 20bb7
// 61
/*codePointAt方法是检测一个字符串由两个字节还是由四个字节组成的最简单方法*/
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
is32Bit("a");
is32Bit("𠮷") // true

/*fromCodePoint()方法*/
/*es5提供了String.fromCharCode方法，用于码点返回对应的字符，但方法不适用32位的UTF-16字符*/
String.fromCodePoint(0x20BB7)
    // "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
    // true
    // 
    // 
    /*字符串的遍历接口*/
    /*es6位字符串添加了遍历接口，使得字符串可以被for。。of循环遍历,适用for..of循环最大的好处是可以识别大于0xffff的码点*/


/*at()功能与charAt方法相似，但是可以识别编码大于oxfff的字符*/


/*normalize()方法，功能是将字符串的不同表示方法统一为同样的形式*/
/*normalize方法目前不能识别三个或三个以上字符的合成。*/



/*includes(),startWith(),endWith()    
includes()：返回布尔值，表示是否找到了参数字符串。
startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。这三个方法都支持第二个参数，表示开始搜索的位置*/

/*repeat()方法表示将元字符重复n次，如果是小数，向下取整；负数或者无穷会报错*/

/*padStart()  padEnd()方法，在头部或者尾部补全长度，两个参数1参数用来指定字符串的最小长度2是用来补全的字符串*/
/*省略第二个参数默认使用空格*/



/*模板字符串``*/
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`