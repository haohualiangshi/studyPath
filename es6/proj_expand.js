var foo="bar";
var baz={foo};

var o={
	method(){
		return "Hello!";
	}
}



var ms={};
function getItem(key){
	return key in ms?ms[key]:null;
}
function setItem(key,value){
	ms[key]=value;
}
function clear(){
	ms={};
}

module.exports={getItem,setItem,clear}


var cart={
	_wheel:4,
	get wheels(){
		return this_wheels;
	}
	set wheels(value){
		if(value < this._wheels){
			thorw new Error('数值太小了');
		}
		this._wheels=value;
	}
}

let propKey='foo';
let obj={
	[propKey]:true,
	["a"+"bc"]:123,
}
console.info(obj);

const obj={
	get foo(){},
	set foo(x){},
};
const descriptor=Object.getOwnPropertyDescriptor(obj, 'foo');

descriptor.get.name;
descriptor.set.name;



var target ={a:1};
var source1={b:20};
var source2={c:3};

Object.assign(target,source1,source2);


var v1='abc';
var v2=true;
var v3=10;


var obj1={a:{b:1}};
var obj2=Object.assign({},obj1);
console.log(obj2);

//什么是symbol属性


Object.setPrototypeOf();
Object.getPrototypeOf();
Object.create();


