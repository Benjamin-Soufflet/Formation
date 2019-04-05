//================[  JQuery click() ]================  

//---------JQuery
$("h1").click(function(){
	alert("h1 clicked");
})

// Click sur plusieurs bouttons
$("button").click(function(){
	alert("One Button clicked");
	$(this).css("background","green");
});

// //---------Pure JS click() 
// document.querySelector("h1").addEventListener("click",function(){
// alert("h1 clicked with no JQ");
// })

// //Click sur plusieurs boutons 
// var buttons = document.querySelectorAll("button"); //Selection
// for (var i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener("click",function(){
// 	alert("One button clicked with no JQuery");
// 	this.style.background = "blue";
// 	});
// }


//================[ keypress() ]================ 
//---------JQuery 
$("input").keypress(function(event){
	if (event.which ===13) {
		alert("You clicked enter");
	}
});

////---------Vanilla JS  
// var input = document.querySelector("input");
// input.addEventListener("keypress",function(event){
// 	if (event.which ===13) {
// 		alert("You clicked ENTER with no JQuery");
// 	}
// });

//================[    JQuery On()     ]================  
$("h1").on("click",function(){
	$(this).css("color","purple");
});

// //---------Vanilla JS  
// var h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
// 	this.style.color = "blue";
// });