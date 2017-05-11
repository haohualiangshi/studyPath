function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
hw.next();


function* foo(x){
	var y=2*(yield (x+1));
	var z=yield(y/3);
	return (x+y+z);
}

var a=foo(5);




var g=function* (){
	try{
		yield;
	}catch(e){
		console.log('内部捕获',e);
	}
};
var i =g();
i.next();

try{
	i.throw('a');
	i.throw('b');
}catch(e){
	console.log('外部捕获',e);
}



var gen =function* gen(){
	try{
		yield console.log("a");
	}catch (e){

	}
	yield console.log('b');
	yield console.log('c');
}

function* g(){
	yield 1;
	console.log('throwing an ex')
}


function* g(){
	yield 1;
	console.log('throwing an exception');
	throw new Error('generator broke!');
	yield 2;
	yield 3;
}

function log(generator){
	var v;
	console.log('starting generator');
	try{
		v=generator.next();
		console.log('第一次运行next',v)
	}catch(err){
		console.log('捕捉错误',v);
	}
	try{
		v=generator.next();
		console.log('第二次运行next',v);
	}catch(err){
		console.log('捕捉错误',v);
	}
	try{
		v=generator.next();
		console.log('第san次运行next',v);
	}catch(err){
		console.log('捕捉错误',v);
	}
	console.log('caller done');
}


log(g());


function* gen(){
	yield 1;
	yield 2;
	yield 3;
}

var g=gen();
g.return();

function* foo(){
	yield 'a';
	yield 'b';
}

function* bar(){
	yield 'x';
	yield* foo();
	yield 'y';
}

for (let v of bar()){
	console.log(v);
}


var url="https://"+this.name+".com";
util.api("/api/tickets/ticketid="+this.ticketsId+"/edit")




function timeout(ms){
	return new Promise((resolve)=>{setTimeout(resolve,ms);})

}

async function asyncPrint(value,ms){
	await timeout(ms);
	console.log(value);
}

asyncPrint('hello world',2000);



async function f(){
	return 'hello world';
}
f().then(v=>console.log(v));

async function f(){
	throw new Error('error');
}
f().then(
	v=>console.log(v),
	e=>console.log(e))


async function getTitle(url){
	let response = await fetch(url);
	let html=await response.text();
	return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)

async function f(){
	return await 123;
}
f().then(v=>console.log(v));


async function f(){
	return await Promise.reject('出错了');
}
f().then(v=>console.log(v)).catch(e=>console.log(e));


async function f(){
	try{
		await Promise
	}
}

function Point(x,y){
	this.x=x;
	this.y=y;
}
Point.prototype.toString=function(){
	return'('+this.x+","+this.y+')';
}
var p=new Point(1,2);


class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	toString(){
		return "("+this.x+","+this.y+")";
	}
}


class Bar{
	doStuff(){
		console.log('stuff');
	}
}

var b=new Bar();

class Foo{
	constructor(){
		return Object.create(null);
	}
}

console.dir(Foo);

const MyClass=class Me{
	getClassName(){
		return Me.name;
	}
}

let person=new class{
	constructor(name){
		this.name=name;
	}
	sayName(){
		console.log(this.name);
	}
}('张三');
console.log(person)

class Widget{
	foo(baz){
		this._bar(baz);
	}
	_bar(baz){
		return this.snaf=baz;
	}
}

class Widget{
	foo(baz){
		bar.call(this,baz);
	}
}
function bar(baz){
	return this.snaf=baz;
}

const bar= Symbol('bar');
const snaf=Symbol('snaf');

export default class myClass{
	foo(baz){
		this[bar](baz);
	}

	[bar](baz){
		return this[snaf]=baz;
	}
}

class logger{
	printName(name='there'){
		this.print(`Hello ${name}`);
	}
	print(text){
		console.log(text);
	}
}
const logger =new Logger();


class ColorPoint extends point{
	constructor(x,y,color){
		super(x,y);
		this.color=color;
	}
	toString(){
		return this.color+" "+super.toString();
	}
}


class A{
	constructor(){
		this.x=1;
	}
	print(){
		console.log(this.x);
	}
}

class B extennd A{
	constructor(){
		super();
		this.x=2;
	}
	m(){
		super.print();
	}
}

let b=new B();
b.m();


class A{
	constructor(){
		this.x=1
	}
}

class B extends A{
	constructor(){
		super();
		this.x=2;
		super.x=3;
		console.log(super.x);
		console.log(this.x);
	}
}
let b= new B();


class Parent{
	static myMethod(msg){
		console.log('static ',msg);
	}
	myMethod(msg){
		console.log('instance ',msg);
	}
}

class Child extends Parent{
	static myMethod(msg){
		super.myMethod(msg);
	}
	myMethod(msg){
		super.myMethod(msg);
	}
}

Child.myMethod(1);
var child=new Child();
child.myMethod(2);
