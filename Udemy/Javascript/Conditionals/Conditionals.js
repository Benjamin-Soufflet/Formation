//-----------Conditional Exercice----------------

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

//if age is negative
if (age < 0){
	console.log("error");
}

if (age === 21){
	console.log("Happy Birthday");
}

else if (age % 2 !== 0 ){
	console.log("your age is odd ");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}


while(count < 6) {
 console.log("count is: " + count);
 count++;
}