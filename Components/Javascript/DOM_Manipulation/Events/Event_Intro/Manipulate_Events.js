//_________________________________________________________________________
//		    |    			<== EVENTS ==>				                |
//__________|___________________________________________________________|__
//==[ Topics covered ]==
//	1.Creer une alerte quand le tag h1 est cliqué
//	2.

//==[1. Alert when clicking]==
var h1 = document.querySelector("h1"); //selection des elements

if(h1){
	h1.addEventListener("click",function(){//Creation de l'event
		alert("Tu as cliqué sur le Titre !");
	});
};

//==[2. Changer la couleur de tous les tags li]==
var lis = document.querySelectorAll("li"); //selection des elements


for (var i = 0; i < lis.length; i++){ //compteur pour le nombre max de li
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	})
}
