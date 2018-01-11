// let monTitre = document.querySelector('h1');
// monTitre.textContent = 'Hello world!';

/////////////////////////////////////////////////

// let monImage = document.querySelector('img');

// monImage.onclick = function(){
// 	let maSrc = monImage.getAttribute("src");
// 	if (maSrc === "images/firefox-icon.png") {
// 		monImage.setAttribute ("src","images/chrome_logo.jpg")
// 	}
// 	else{
// 		monImage.setAttribute ("src","images/firefox-icon.png")
// 	}
// }

let myButton = document.querySelector("button");
let monTitre = document.querySelector("h1");

function defUser() {
	let monNom = prompt("Quel est ton nom ?");
	localStorage.setItem("nom", monNom);
	monTitre.innerHTML="Mozilla c'est Cool"+ monNom;
}


if(!localStorage.getItem("nom")) {
	defUser();
}else{
	var recName = localStorage.getItem("nom");
	monTitre.innerHTML="Mozilla c'est Cool"+ recName;
}


myButton.onclick = function(){
	defUser();
}
