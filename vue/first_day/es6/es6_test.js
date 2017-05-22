function add([x,y]){
	return x+y;
}
var x=add([1,2]);
console.log(x);
class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;

	}
	getX(){
		return this.x;
	}
	getY(){
		return this.y;
	}
}

let p=new Point('zhang',"hao");
console.log(p.getX());