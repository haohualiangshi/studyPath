var color="blue";
function changeColors(){
	var anotherColor="red";
	function swapColors(){
		var tempColor=anotherColor;
		anotherColor=color;
		color=tempColor;
	}
}