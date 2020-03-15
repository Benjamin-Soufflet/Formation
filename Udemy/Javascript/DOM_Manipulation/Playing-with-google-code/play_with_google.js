//_________________________________________________________________________
//		    |    			<== PLAYING WITH GOOGLE CODE ==>				|
//__________|___________________________________________________________|__
//
//==[ Topics covered ]==
//	+Select the google log and replace it by another
//	+Select all the anchor tags of a page


//==[ change the logo ]==

	//Select the logo
var logo = document.querySelector("#hplogo");
	//change the source and the address
logo.setAttribute("srcset","https//:leboncoin.fr");


//==[ Select all the anchor tags ]==
	//Select all a tags
var links = document.getElementsByTagName("a");

	//Use a loop as setAttribute works on an individual element
for (var i = 0; i < links.length; i++) {
	links[i].style.background = "pink";
	links[i].style.border = "1px dashed purple";
}
	//==> all the links have a pink background