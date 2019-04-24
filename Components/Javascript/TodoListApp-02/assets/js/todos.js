// //-----------------[ JQuery way ]--------------
// //Task Completed
// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("completed");
// });

// //Deleted a task
// $("ul").on("click", "span" ,function(event){
// 	$(this).parent().fadeOut(500, function(){ //on fait disparaitre li
// 		$(this).remove();//suppression du li
// 	});
// 	event.stopPropagation();
// }); 

// //Add a task
// $("input[type='text']").keypress(function(event){
// 	if (event.which ===13) {
// 		//Get the textContent
// 		var todoText = $(this).val();
// 		//reset the input text
// 		$(this).val("");
		
// 		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ todoText +"</li>");
// 	}
// });

// //Toggle the input
// $(".fa-plus").click(function(){
// 	$("input[type='text']").fadeToggle();
// });

//-----------------[ Vanilla JS ]--------------------
//Variables
var lis = document.querySelectorAll("li");
var trashBtn = document.querySelectorAll("span");
var myList = document.querySelector("#myList"); 



//Clic sur le span de suppression ou la tache
myList.addEventListener("click", function(event){
	var clickedEl = event.target;
	console.log(clickedEl);
	//Task Completed
	if (clickedEl.tagName === "LI") {
		clickedEl.classList.toggle("completed");
	}
	//Delete a task
	else if (clickedEl.tagName === "SPAN") {
		var listItem = clickedEl.parentNode;
       	listItem.parentNode.removeChild(listItem); 
	}
});

//Task Completed
// for (var i = 0; i < lis.length; i++) {
//  	lis[i].addEventListener("click",function(){
// 			this.classList.toggle("completed");
// 	});
// };
//Deleted a task
// for (var i = 0; i < trashBtn.length; i++) {
// 	trashBtn[i].addEventListener("click", function(event){
// 		//On va chercher les parents du span
// 		//this.parentElement.parentElement.removeChild(this.parentElement);
// 		var ul = this.parentElement.parentElement;
// 		var li = this.parentElement;
// 		ul.removeChild(li);
// 		event.stopPropagation();
// 	});
// };

//Add a task
var input = document.querySelector("input");
input.addEventListener("keypress",function(event){
	if (event.which ===13) {
		//get the text/value of the input
		var todoText = input.value;
		//reset the input
		input.value = "";
		//create a new li and add to ul
		var newli = document.createElement("li");
		//Ajout du text au nvl element li
		newli.innerHTML = "<span><i class='fas fa-trash'></i></span> " + todoText ;
		//Ajout du li au ul
		document.querySelector("ul").appendChild(newli);
	}
});
//Button dropdow for input text
var plusBtn = document.querySelector(".fa-plus");
plusBtn.addEventListener("click", function(event){
	console.log("+ cliqué")
})