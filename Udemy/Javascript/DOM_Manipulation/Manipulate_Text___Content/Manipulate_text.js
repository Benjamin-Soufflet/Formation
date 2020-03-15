//_________________________________________________________________________________
//		    |    			<== MANIPULATE TEXT & CONTENT ==>						|
//__________|_______________________________________________________________|______
//
//==[ Topics covered ]==
//	+Return a string of an element
//		+textContent : get only the text as a string
//		+InnerHTML : get the HTML tags as well



//=[ Return a string of all the text contained in an element ]=
	//Select the <p> tag:
var tag = document.querySelector("p");

	//Retrieve the text : get purely the text content of p without HTML tags
tag.textContent; //==>"Cats are the best in the world"


tag.innerHTML; //==>"Cats are <strong>the best</strong> in the world"

	//alter the textContent:
		//This changes automatically the html element on the page 
tag.textContent = "blah blah blah";

//Another way to change the text
document.querySelector("h1").textContent = "END OF LESSON";
