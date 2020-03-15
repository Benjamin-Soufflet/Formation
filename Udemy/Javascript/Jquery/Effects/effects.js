// $("button").on("click", function(){
//  $('div').slideToggle(1000, function(){
//  	$(this).remove();//remove the divs AFTER the slideToggle is finished
//  });
// });

//Sans Jquery
divs = document.querySelectorAll("div");
document.querySelector("button").addEventListener("click",function(){
	for (var i = 0; i < divs.length; i++) {
		divs[i].classList.toggle("visible");
		divs[i].classList.toggle("hidden");
	}
});


