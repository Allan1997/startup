(function(){ 
function showHiddenSec(){
	let hidden = document.getElementById('hidden');
	hidden.style.display = "block";
}
let button = document.getElementById("button");
button.addEventListener("click",randomJoke);

function randomJoke (){
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://api.icndb.com/jokes/random",true);
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4 && xhr.status == 200){
			console.log("Successful Request");
			let jsonObject = JSON.parse(xhr.response);  //https://www.w3schools.com/js/js_json_parse.asp // all this part done with that
			let content = document.getElementById("joke");
			content.innerHTML = jsonObject.value.joke; // writes the joke in the div
		}else{
			console.log("Error in request");
		}
	}
	xhr.send();
}
}())