	//Selection des bouttons et input
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
	//Tableau d'affichage Score
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winningScoreDisplay = document.querySelector("p span");
	//Score de chaque joueur
var p1Score = 0;
var p2Score = 0;
var gameOver = false ;
var winningScore = 5; 

//Give 1 point to player 1
p1Button.addEventListener("click",function(){
	if (!gameOver) {//check partie non terminée
		p1Score ++; //+1 au score
		p1Display.textContent = p1Score ;//affichage du nouveau score
		if(p1Score === winningScore){
			gameOver = true ; //On signifie la fin du score
			p1Display.classList.add("winner-Class");//Ajout de la classe CSS	
		}
	}
	else{
		alert("Game Over ! Please reset.");
	} 
});

//Give 1 point to player 2
p2Button.addEventListener("click",function(){
	if (!gameOver) {
		p2Score ++;
		p2Display.textContent = p2Score ;
		if (p2Score === winningScore) {
			gameOver = true ;
			p2Display.classList.add("winner-Class");
		}
	}
});

//Reset Process
resetButton.addEventListener("click",function(){
	reset();
});

//Fonction de reset (factorisé car utilisé par plusieurs events
function reset(){
	//Remise à 0 des score
	p1Score = 0;
	p2Score = 0;
	//Affichage à 0
	p1Display.textContent = p1Score ;
	p2Display.textContent = p2Score ;
	//Retrait de la classe CSS du winner
	p1Display.classList.remove("winner-Class");
	p2Display.classList.remove("winner-Class");
	//Remise à false de game over
	gameOver = false ;
}

//Changement du Winning Score
numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});