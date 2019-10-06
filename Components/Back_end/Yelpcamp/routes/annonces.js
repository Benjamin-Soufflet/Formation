//======================================================================
//                            Routes ANNONCES
//======================================================================

//appel au routeur d'express
var express = require("express");
var router = express.Router();
//Middleware
var middleware = require("../middleware/index");

//Ajout des modèles
var Annonce = require("../models/annonce");


//------- INDEX - Affichage des annonces-------------------
router.get("/annonces",function(req,res){
	//Chopper toutes les annonces de la db
	Annonce.find({}, function(err, allAnnonces){
		if(err){
			console.log(err);
		} else {
			//Envoie des data à la vue
			res.render("annonces/index.ejs",{annonces: allAnnonces});
		}
	});
});

//------- NEW - Formulaire d'ajout d'une annonce-------------
router.get("/annonces/new", middleware.isLoggedIn, function(req,res){
	//direction vers le formulaire
	res.render("annonces/new.ejs");
});

//------- CREATE ANNONCE - Ajout d'une annonce---------------
router.post("/annonces", middleware.isLoggedIn, function(req,res){
	
	//Choper la data from form et on l'ajoute au array des annonces
	var name 	= req.body.name;
	var image 	= req.body.image;
	var desc 	= req.body.description;
	//On prend les infos du user logged
	var auteur = {
		id: req.user._id,
		username:req.user.username 
	};
	
	//Création d'un nouvel objet
	var newAnnonce = { name:name, image: image, description: desc, auteur:auteur};
	
	//Enregistrement dans la DB de l'objet
	Annonce.create(newAnnonce, function(err,newlyCreated){
		if (err){
			console.log(err);
		} else {
				
			//On redirige ensuite vers la page des annonces
			res.redirect("/annonces");
		}
	});
});

//------- SHOW - shows more info about one annonce
router.get("/annonces/:id", function(req, res){
    //find the campground with provided ID
    Annonce.findById(req.params.id).populate("commentaires").exec(function(err, foundAnnonce){
        if(err || !foundAnnonce){
            req.flash("error", "Nous n'avons pas trouvé cette annonce.");
			res.redirect("back");
        } else {
            //render show template with that campground
            res.render("annonces/show.ejs", {annonce: foundAnnonce});
        }
    });
});

//------- EDIT ROUTE-------------
router.get("/annonces/:id/edit", middleware.isAnnonceOwner, function(req,res){
	var idAnnonce = req.params.id;
	//Recherche de l'annonce via id
	Annonce.findById(idAnnonce, function(err,foundAnnonce){
		res.render("annonces/edit.ejs", {annonce:foundAnnonce});
	});
});

//------- UPDATE ROUTE-------------
router.put("/annonces/:id", middleware.isAnnonceOwner,function(req,res){
	//Trouver et  modifier la correcte annonce
	var idAnnonce = req.params.id;
	var newAnnonce = req.body.annonce;
	Annonce.findByIdAndUpdate(idAnnonce, newAnnonce, function(err,updatedAnnonce){
		if(err){
			console.log(err);
			res.redirect("/annonces");
		} else {
			//Redirection vers l'annonce modifiée
			res.redirect("/annonces/" + idAnnonce);
		}
	});
	
});

//------- DELETE ROUTE-------------
router.delete("/annonces/:id", middleware.isAnnonceOwner, function(req,res){
	//Récupération id de l'Annonce from button
	var idAnnonce = req.params.id;
	//Suppression de l'annonce
	Annonce.findByIdAndRemove(idAnnonce, function(err){
		if(err){
			console.log(err);
			//Redirection vers les annonces
			res.redirect("/annonces");
		} else {
			//Redirection vers les annonces 
			res.redirect("/annonces");
		}
	});
});


//On exporte ensuite la route
module.exports = router;
