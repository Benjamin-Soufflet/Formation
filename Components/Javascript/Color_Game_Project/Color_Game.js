var numSquares = 6;
var colors = []; //panel de couleurs
var pickedColor ; //Couleur de référence
//Display Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//Eventlistener of buttons
	setupModeButtons();
	//EventListener of Squares pick
	setupSquares();	
	reset();
}

//Mode buttons event (refactorisation des 2 modes)
function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			console.log(this.textContent);
			if (this.textContent === "EASY") {
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			//Autre manière d'ecrire le check au dessus
			//this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
			reset();
		});
	}
}
//Click Listener of squares
function setupSquares(){
	for (var i = 0; i < squares.length; i++) {	
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab the picked color
			var clickedColor = this.style.backgroundColor;
			//Compare the picked color of the square to picked color
			if (clickedColor === pickedColor) { //When it's a win
				messageDisplay.textContent = "Correct !";
				resetButton.textContent = "Play Again ?";
				changeColors(clickedColor);//Change la couleur de tous les carrés
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again?";
			}
		});	
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array and display its code
	pickedColor = pickColor();
	//display
	colorDisplay.textContent = pickedColor; 
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//changes colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";//rends visible le carré
			squares[i].style.backgroundColor = colors[i];//attribution couleur
		} else{
			squares[i].style.display = "none";//cache les 3 derniers
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

// //BOUTTON EASY
// easyBtn.addEventListener("click", function(){
// 	//des/activation des bouttons
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	numSquares = 3;
// 	//generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change color display
// 	colorDisplay.textContent = pickedColor;
// 	//Attribution des couleurs aux 3 premiers + hidde les 3 autres
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
//
// //BOUTTON HARD
// hardBtn.addEventListener("click", function(){
// 	//des/activation des bouttons
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
	
// 	numSquares = 6;
// 	//generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change color display
// 	colorDisplay.textContent = pickedColor;
// 	//Attribution des couleurs aux 3 premiers + hidde les 3 autres
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });


//Bouton reset
resetButton.addEventListener("click",function(){
	reset();
})


//Attribution des couleurs et testing
for (var i = 0; i < squares.length; i++) {	
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab the picked color
		var clickedColor = this.style.backgroundColor;
		//Compare the picked color of the square to picked color
		if (clickedColor === pickedColor) { //When it's a win
			messageDisplay.textContent = "Correct !";
			resetButton.textContent = "Play Again ?";
			changeColors(clickedColor);//Change la couleur de tous les carrés
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again?";
		}
	});	
}


//Fonction qui Change la couleur de tous les carrés pour celle en entrée
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}
//Fonction aléatoire pour choisir une des 6 couleurs comme référence
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Fonction génératrice de n couleurs random
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color
		arr.push(randomColor(i));
	}
	//return that array
	return arr;
}

//Fonction générant une couleur aléatoire
function randomColor(){
	//pick a red from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var blue = Math.floor(Math.random() * 256);
	//return a big string of 3 previous colors
	return "rgb(" + red +", " + green + ", " + blue + ")";
}