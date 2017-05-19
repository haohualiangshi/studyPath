// var add=require('./add').add;
// add(1,3);
// document.write("hello world dsffgsd");\
// var $=require("jquery");//全局安装的写法
// var $=require("../../node_modules/jquery/dist/jquery.min.js");//没有全局安装的写法
require("../css/index.less");
var stuJson=require("./test.json");
console.log("my name is "+stuJson.name);
$(document).ready(function(){
	console.log("aa");
})
let node_a="node";
console.log(node_a);