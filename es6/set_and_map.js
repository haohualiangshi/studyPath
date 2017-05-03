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


var p1=new Person('jake',10);
p1.sayHello();
var s1=new Student('tom',13,6,'清华小学');





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
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1