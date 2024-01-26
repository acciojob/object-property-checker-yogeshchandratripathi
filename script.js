const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if(hasKey("red")){
		console.log(true);
	}
	if(hasKey("green")){
		console.log(true);
	}
	if (hasKey("white")) {
		console.log(true);
	}
	else{
		console.log(false);
	}
}
// Do not change the code below

const key = prompt("Enter Key.");
alert(hasKey(key));
