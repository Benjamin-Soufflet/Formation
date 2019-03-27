//Selection du button
var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurle = false;

//<---------1ere Methode------->
// button.addEventListener("click",function(){
// 	if (isPurle){
// 		body.style.background = "white";
// 	}
// 	else {
// 		body.style.background = "purple";
// 	}
// 	isPurle = !isPurle;
// });

//<---------2eme Methode------->
button.addEventListener("click",function(){
	body.classList.toggle("Purple-class");
});