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
	
function ajaxCall (method, url){
	let promise = new Promise (function(resolve,reject){
		let xhr = new XMLHttpRequest ();
		xhr.open(method,url,true);
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				console.log("Successful Request (ajax call)");
				let jsonObject = JSON.parse(xhr.response);
				resolve(jsonObject);
			}else{
				console.log("Error in request (ajax call)");
				reject(xhr.status);
			}
		}
		xhr.send();
	});
	return promise;
}

function getJokePromise (){
	let result = ajaxCall("GET","http://api.icndb.com/jokes/random");
	console.log(result); // borrar esto 
	document.getElementById("joke").innerHTML = result.value.joke;
}
