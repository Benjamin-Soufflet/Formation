// GOAL : Use the several Selectors Methods available

//Get an Element by ID :
Var tag = document.getElementById("highlight");
console.log(tag);

//get the first element that matches a CSS-Style selector :
var tag1 = document.querySelector("#highlight");
console.log(tag1);

//Get an element by CLASS NAME :
var tags1 = document.getElementsByClassName("bolded");
console.log(tags1[0]);

//get an element by TAG NAME :
//get a list of all <li> elements : 
var tags2 = document.getElementsByTagName("li");
console.log(tags2[0]);

//QuerySelectorAll :
//Returns a list of all elements that matches the CSS-Style:
var tag4 = document.querySelectorAll("h1");