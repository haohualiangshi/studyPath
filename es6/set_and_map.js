const s= new Set();
[2,3,4,5,2,2,2].forEach(x=>s.add(x));
for(let i in s){
	console.log(i);
}



let set=new Set(['red','green','blue']);
for (let item of set.keys()){
	console.log(item);
}

