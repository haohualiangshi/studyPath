const s = new Set();
[2, 3, 4, 5, 2, 2, 2].forEach(x => s.add(x));
for (let i in s) {
    console.log(i);
}



let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
    console.log(item);
}
var a = new Set([5, 5, "5", "5"]);


function dedupe(array) {
    return Array.from(new Set(array));
}



const m = new Map();
const o = { p: "hello world" };
m.set(o, "content")
console.log(m);

const map = new Map();
map.set('foo', true);
map.set("bar", false);
map.size


function f() {
    console.log('outside');
}
(function() {
    if (false) {
        function f() {
            console.log('inside');
        }
    }
    f();
}())



/*apply  和 call*/
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("hello");
    }
}

function Print() {
    this.funcName = "print";
    this.show = function() {
        var msg = [];
        for (var key in this) {
            if (typeof(this[key]) != 'function') {
                msg.push([key, ":", this[key]].join(''));
            }
        }
        console.log(msg.join(" "))
    }
}


function Student(name, age, grade, school) {
    Person.apply(this, arguments);
    Print.apply(this, arguments);
    this.grade = grade;
    this.school = school;
}


var p1 = new Person('jake', 10);
p1.sayHello();
var s1 = new Student('tom', 13, 6, '清华小学');





var handler = {
    get: function(target, name) {
        console.log('get');
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    // apply: function(target, thisBinding, args) {
    // 	console.log('apply');
    //   return args[0];
    // },

    construct: function(target, args) {
        console.log('construct;');
        return { value: args[1] };
    }
};

var fproxy = new Proxy(function(x, y) {
    return x + y;
}, handler);

fproxy(1, 2) // 1

var person = {
    name: "zhangshan",
}
var proxy = new Proxy(person, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\"does not exist .");
        }
    }
})


function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    }
    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}
let arr = createArray('a', "b", "c");
arr[-1];


var pipe = (function() {
    return function(value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function(pipeiObject, fnName) {
            	console.log(pipeiObject, fnName);
                if (fnName === 'get') {
                    return funcStack.reduce(function(val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(window[fnName]);
                return oproxy;
            }
        });

        return oproxy;
    }
}());
var double = n => n * 2;
var pow=n=>n*n;
var reverseInt=n=>n.toString().split("").reverse().join("")|0;
pipe(3).double.pow.reverseInt.get;



const dom = new Proxy({},{
	get(target,property){
		return function(attrs={},...children){
			const el=document.createElement(property);
			for(let prop of Object.keys(attrs)){
				el.setAttribute(prop,attrs[prop]);
			}
			for(let child of children){
				if(typeof child==="string"){
					child=document.createTextNode(child);
				}
				el.appendChild(child);
			}
			return el;
		}
	}
});
const e1=dom.div({},'indser')
const el=dom.div({},'hello,my name is ',dom.a({href:'www.baidu.com'},'mark'),
	'. i like:',
	dom.ul({},dom.li({},'The web'),dom.li({},'food'),dom.li({},'...that beautiful'))
	)

let validator={
	set:function(obj,prop,value){
		if(prop ==='age'){
			if(!Number.isInteger(value)){
				throw new TypeError('The age is not an integer');
			}
			if(value > 200){
				throw new RangeError('this age seems invalid');
			}
		}
		obj[prop]=value;
	}
}
let person = new Proxy({},validator);
person.age=100



var handler = {
    get(target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set(target, key, value) {
        invariant(key, 'set');
        target[key] = value;
        return true;
    }
};

function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`invalid attempt to ${action} provate "${key}" property`);
    }
}
var target = {};
var proxy = new Proxy(target, handler);



var target=function(){
	return 'I am the target';
};
var handler={
	apply:function(){
		return 'I am the proxy';
	}
}

var p=new Proxy(target,handler);


var twice={
	apply(target,ctx,args){
		return Reflect.apply(...arguments)*2;
	}
};
function sum(left,right){
	return left+right;	
}
var proxy=new Proxy(sum,twice);
proxy(1,2);

var handler={
	has(target,key){
		if(key[0]==="_"){
			return false;
		}
		return key in target;
	}
};
var target={
	_prop:'foo',
	prop:"foo"
};
var proxy=new Proxy(target,handler);


var obj ={a:10};
Object.preventExtensions(obj);
var p= new Proxy(obj,{
	has:function(target,prop){
		return false;
	}
})


let stu1={name:'zhangsan',score:59};
let stu2={name:'lisi',score:99};
let handler={
	has(target,prop){
		if(prop==='score'&&target[prop]<60){
			console.log(`${target.name}不及格`);
			return false;
		}
		return prop in target;
	}
}
let oproxy1= new Proxy(stu1,handler);
let oproxy2=new Proxy(stu2,handler);
'score' in oproxy1;
for(let a in oproxy1){
	console.log(oproxy1[a]);
}

var handler={
	construct(target,args,newTarget){
		return new target(...args);
	}
}


var p=new Proxy(function(){},{
	construct:function(target,args){
		console.log('called: '+args.join(", "));
		return {value:args[0]*10};
	}
});
(new p(1)).value;



var handler={
	deleteProperty(target,key){
		invariant(key,'delete');
		return true;
	}
};

function invariant(key,action){
	if(key[0]==="_"){
		throw new Error(`Invalid attempt to ${action} private "${key}" property`);
	}
}
var target={_prop:'foo'};
var proxy=new Proxy(target,handler);
delete proxy._prop;




