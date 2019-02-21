//_________________________________________________________________________________
//		    |    			<== MANIPULATE STYLES ==>						|
//__________|_______________________________________________________________|______
//
//==[ Topics covered ]==
//	+change an element style
//	+Add / Remove a class
//	+Change the content of a tag
//	+Change the attribute (src,href,etc)


//=[ With the style property ]=
	//SELECT
var tag = document.getElementById("highlight");

	//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//=[ With instead an css class already defined ]=
//   This helps to organize style classes so as to avoid confusion between files overrides.

var tag = document.getElementById("highlight");

	//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");

	//REMOVE A CLASS
tag.classList.remove("some-class");

	//TOGGLE A CLASS
tag.classList.toggle("some-class");


