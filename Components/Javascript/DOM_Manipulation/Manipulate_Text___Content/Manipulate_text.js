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

	//Retrieve the textContent: get purely the text content of p
tag.textContent //"This is an awesome paragraph"

tag.InnerHTML //"This is an <strong>awesome</strong> paragraph "

	//alter the textContent:
		//This changes automatically the html element on the page 
tag.textContent = "blah blah blah";
