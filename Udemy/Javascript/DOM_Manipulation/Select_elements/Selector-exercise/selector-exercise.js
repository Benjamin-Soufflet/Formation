// GOAL : Use the several Selectors Methods available to get first p tag
//----------------------------------------
//===>Get by ID "first":
	//===>thanks to getElementByID method :
var p = document.getElementById("first");
console.log(p);

	//====>thanks to querySelector method :
var p1 = document.querySelector("#first");
console.log(p1);


//----------------------------------------
//===>Get by Classe "special"  :
	//====>thanks to getElementsByClassName method :
var p2 = document.getElementsByClassName("special")[0];
console.log(p2);

	//====>thanks to querySelector method :
var p3 = document.querySelector(".special");
console.log(p3);

	//====>thanks to querySelectorAll method :
var p4 = document.querySelectorAll(".special")[0];
console.log(p4);


//----------------------------------------
//===>Get by tag name :
	//====>thanks to getElementsByTagName method :
var p5 = document.getElementsByTagName("p")[0];
console.log(p5);

//====>thanks to querySelector method :
var p6 = document.querySelector("p");
console.log(p6);

	//====>thanks to querySelectorAll method :
var p7 = document.querySelectorAll("p")[0];
console.log(p7);

	//====>thanks to querySelector method but directly after h1:
var p8 = document.querySelector("h1 + p");
console.log(p8);

