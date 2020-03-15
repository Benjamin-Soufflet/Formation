//_________________________________________________________________________
//		    |    			<== MANIPULATE ATTRIBUTES ==>				|
//__________|___________________________________________________________|__
//
//==[ Topics covered ]==
//	+Use getAttribute() and setAttribute() to read and write attributes like src or href


var link = document.querySelector("a");

	//==[ CHANGE HREF ATTRIBUTE ]==
link.getAttribute("href");  //"www.google.com"
link.setAttribute("href","http://www.dogs.com"); 
	//==> <a href="www.dogs.com">I am a link</a>

	//==[ TO CHANGE THE IMAGE SRC ]==
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
	//==> <img src="corgi.png">