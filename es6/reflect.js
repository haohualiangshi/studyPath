Proxy(taregt,{
	set:function(target,name,value,receiver){
		var success=Reflect.set(target,name,value,receiver);
		if(success){
			log('property '+name+' on '+target+' set to '+value);
		}
		return success;
	}
})

var loggedObj=new Proxy(obj,{
	get(target,name){
		console.log('get',target,name);
		return Reflect.get(target,name);
	},
	deleteProperty(target,name){
		console.log('delete ',name);
		return  Reflect.deleteProperty(target,name);
	},
	has(target,name){
		console.log('has'+name);
		return Reflect.has(target,name);
	}
})

/*Reflect的13个静态方法*/
var myObject={
	foo:1,
	bar:2,
	get baz(){
		return this.foo+this.bar;
	},
}

Reflect.get(myObject,'foo');
Reflect.get(myObject,'bar');
Reflect.get(myObject,'baz');
Reflect.get(myObject,"asdfa");


var myObject={
	foo:"中华二货",
	foo2:"明亮二货",
	get baz(){
		return this.foo+" and "+this.foo2;
	},
};
var myReceiverObject={
	foo:"安士单身",
	foo2:"我单身",
}
Reflect.get(myObject,'baz',myReceiverObject);

var myObject={
	foo:1,
	set bar(value){
		return this.foo=value;
	},
}


Reflect.set(myObject,'foo',2);



const queuedObservers=new set();
const observe=fn=>queuedObservers.add(fn);
const observable=obj=>new Proxy(obj,{set});


var promise = new Promise(function(resolve,reject){

})


function loadImageAsync(url){
	return new Promise(function(resolve,reject){
		var image=new Image();
		image.onLoad=function(){
			resolve(image);
		};
		image.onerror=function(){
			reject(new Error('Could not load image at '+url));
		};
		image.src=url;
	})
}



var getJson=function(url){
	var promise=new Promise(function(resolve,reject){
		var client=new XMLHttpRequest();
		client.open("GET",url);
		client.onreadystatechange=handler;
		client.responseType="json";
		client.setRequestHeader("Accept", "application/json");
		client.send();
		function handler(){
			if(this.readyState!==4){
				return;
			}
			if(this.status===200){
				resolve(this.response)
			}else{
				reject(new Error(this.statusText))
			}
		}
	})
	return promise;
}


var p1=new Promise(function(resolve,reject){
	setTimeout(()=>reject(new Error('fail')),3000)
})
var p2=new Promise(function(resolve,reject){
	setTimeout(()=>resolve(p1),1000)
})
p2.then(result=>console.log(result)).catch(error=>console.log(error));



var someAsyncThing=function(){
	return new Promise(function(resolve,reject){
		resolve(x+2);
	});
};

someAsyncThing().then(function(){
	console.log("everything is great");
}).catch(function(err){
	console.log(err);
})


var someAsyncThing=function(){
	return new Promise(function(resolve,reject){
		resolve(x+2);
	});
};

someAsyncThing().then(function(){
	return someAsyncThing()
}).catch(function(error){
	console.log('oh no ',error);
	y+2;
}).then(function(){
	console.log('carry on');
})



let thenable={
	then:function(resolve,reject){
		resolve(42);
	}
}


let p1=Promise.resolve(thenable);
p1.then(function(value){
	console.log(value);
})



function makeIterator(array){
	var nextIndex=0;
	return {
		next:function(){
			return nextIndex<array.length?{value:array[nextIndex++]}:{done:true};
		}
	}
}

class RangeIterator{
	constructor(start,stop){
		this.value=start;
		this.stop=stop;
	}
	[Symbol.iterator](){
		return this;
	}
	next(){
		var value=this.value;
		if(value<this.stop){
			this.value++;
			return {done:false,value:value}
		}
		return {done:true,value:undefined}
	}
}

function range(start,stop){
	return new RangeIterator(start,stop);
}

for(var value of range(0,3)){
	console.log(value);
}

