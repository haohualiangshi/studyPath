/*在es5中，regExp的参数有两种情况
第一种：第一个参数是字符串，第二个参数是正则表达式的修饰符*/
var regx=new RegExp('xyz','i');/*等价于var regx=/xyz/i*/
/*在es5中，当第一个参数是正则表示式，不允许第二个参数是标示位，es6改变了这种状况*/
/*字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。*/
/*es6正则上添加u修饰符是为了处理大于\uffff的编码*/