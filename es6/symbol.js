let s=Symbol();
typeof s;


var mySymbol=Symbol();
var a={};
a.mySymbol='hello';
a[mySymbol]
a['mySymbol']


log.levels={
	DEBUG:Symbol('debug'),
	INFO:Symbol('info'),
	WARN:Symbol('warn')
};


const color_red=Symbol('red');
const color_green=Symbol('green');
function getComplement(color){
	switch (color){
		case color_red:
		return color_green;
		case color_green:
		return color_red;
		default:
		throw new Error('undefined color');
	}
}

getComplement(color_red)


function getArea(shape,options){
	var area=0;
	switch(shape){
		case "triangle":
		area=.5*options.width*options.height;
		break;
	}
	return area;
}

getArea('triangle',{width:100,height:100});

var obj={};
var a=Symbol();
var b=Symbol();


obj[a]='hello';
obj[b]="world";
console.log(obj[a]);
for(var i in obj){
	console.log(i);
}