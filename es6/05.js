// String.fromCodePoint()可以shibie大于\uffff的字符
const {log} = console;
log(String.fromCharCode(0x20bb7));
log(String.fromCodePoint(0x20bb7));

// row()
log(String.raw`'Hi\\n'`);
log(String.raw`Hi\\n` === "Hi\\\\n")
// includes();startWith();endsWith();
let s = 'hello world';
log(s.includes('w'));
log(s.startsWith("w"));
log(s.startsWith("h"));
log(s.endsWith('ld'));
// repeat 返回一个将原字符串重复n次的新字符串

log('zhang'.repeat(2));
// es2017字符串补全长度的功能；padStart()头部补全；padEnd()用于尾部补全
log('x'.padStart(4,"abcd"));
log('y'.padEnd(5,"abcd"));

// trim() ;trimStart();trimEnd()
const str1=' a b c ';
log(str1.trim());
log(str1.trimStart());
log(str1.trimEnd());
