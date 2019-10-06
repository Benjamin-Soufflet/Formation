//----------------------------------------------------------------------
//                            Variables
//----------------------------------------------------------------------

//Appel des modules dans l'app
var express = require("express");
var app = express();
var request = require('request');

////Enlever les extensions .ejs des vues
//app.set("view engine", "ejs")

//----------------------------------------------------------------------
//                            ROUTES
//----------------------------------------------------------------------

//Search route
app.get("/",function(req,res){
	res.render("search.ejs");
});

//results route
app.get("/results",function(req, res){
    //On récupère la valeur de l'attribut search du formulaire
	var query = req.query.search;
	//On oublie pas l'ID d'entrée pour la requete
	var apikey = "&apikey=thewdb";
	//Concaténation de l'URL
	var url = "http://omdbapi.com/?s=" + query + apikey;
	console.log(url);
	
	//On fait ensuite la requête vers l'API
	request(url,function(error, response, body){
		if (!error && response.statusCode == 200){
			//On transforme le string en objet JS
			var data =JSON.parse(body);
			//On envoit les data vers la vue results
			res.render("results.ejs", {data: data});
		}
	});
});


//lancement du server sur le port demandé
app.listen(3000, () => {
    console.log("Movie App has started !!");
});