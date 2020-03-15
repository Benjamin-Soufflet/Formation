//======================================================================
//                            ROUTES COMMENTAIRES
//======================================================================

//appel au routeur d'express
var express = require("express");
var router = express.Router();
//Ajout Middleware
var middleware = require("../middleware/index.js");

//Ajout des modèles
var Annonce = require("../models/annonce");
var Commentaire = require("../models/commentaire");


//------- CREATE - Ajout d'un commentaire---------------
router.post("/annonces/:id/commentaires/", middleware.isLoggedIn, function(req,res){
	var idAnnonce = req.params.id;
	//Cherche l'annonce en question
	Annonce.findById(idAnnonce, function(err,foundAnnonce){
		if (err){
			console.log(err);
			req.flash("error", "Un problème est survenue, réessayez votre opération");
			res.redirect("/annonces");
		} else {
			//Récupération du commentaire
			var newCommentaire = req.body.commentaire;
			//Création du commentaire
			Commentaire.create(newCommentaire,function(err, createdCommentaire){
				if (err){
					console.log(err);
				} else{
					//Ajout username et id au commentaire
					createdCommentaire.auteur.id = req.user._id;
					createdCommentaire.auteur.username = req.user.username;
					//save le commentaire
					createdCommentaire.save();
					
					//Association avec l'annonce
					foundAnnonce.commentaires.push(createdCommentaire);
					//On save ensuite l'annonce
					foundAnnonce.save();
					
					//Message Notif création succès
					req.flash("success","Commentaire ajouté avec succès.");
					//Redirection vers cette annonce
					res.redirect("/annonces/" + foundAnnonce._id);
				}
			});
		}
	});
});


//On exporte ensuite la route
module.exports = router;