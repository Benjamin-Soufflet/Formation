//======================================================================
//                            ROUTES COMMENTAIRES
//======================================================================

//appel au routeur d'express
var express = require("express");
var router = express.Router();
//Middleware
var middleware = require("../middleware/index");

//Ajout des modèles
var Annonce = require("../models/annonce");
var Commentaire = require("../models/commentaire");

//------- NEW - Ajout d'un com-------------------
router.get("/annonces/:id/commentaires/new", middleware.isLoggedIn,function(req, res){
	//Récupère l'id dans la requete
	var idAnnonce = req.params.id;
	//On cherche l'objet ensuite en db
	Annonce.findById(idAnnonce, function(err,foundAnnonce){
		if (err){
			console.log(err);
		} else {
			res.render("commentaires/new.ejs",{annonce: foundAnnonce});
		}
	});
});

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

//------- EDIT ROUTE COMMENTAIRE-------------
router.get("/annonces/:id/commentaires/:com_id/edit", middleware.isCommentOwner, function(req,res){
	var idAnnonce = req.params.id;
	var idCommentaire = req.params.com_id;
	//Check que l'annonce existe bien ou n'est pas null
	Annonce.findById(idAnnonce, function(err,foundAnnonce){
		if(err && !foundAnnonce){
			req.flash("error", "Cette annonce n'existe pas.");
			return res.redirect("back");
		} else {
			//Recherche DB de le commentaire via
			Commentaire.findById(idCommentaire, function(err,foundCommentaire){
				if(err){
					res.redirect("back");
				} else{
					//Si trouvé on envoie le formulaire avec l'annonce et le com
					res.render("commentaires/edit.ejs",{annonce_id : idAnnonce, commentaire: foundCommentaire});
				}
			});
		}
	});
});

//------- UPDATE - ROUTE COMMENTAIRE-------------
router.put("/annonces/:id/commentaires/:com_id", middleware.isCommentOwner, function(req,res){
	//Trouver le commentaire
	var idAnnonce = req.params.id;
	var idCommentaire = req.params.com_id;
	var newCommentaire = req.body.commentaire;
	//Modification du commentaire
	Commentaire.findByIdAndUpdate(idCommentaire, newCommentaire, function(err,updatedCommentaire){
		if(err){
			res.redirect("back");
		} else{
			res.redirect("/annonces/" + idAnnonce);
		}
	});
});

//------- DELETE - ROUTE COMMENTAIRE-------------
router.delete("/annonces/:id/commentaires/:com_id", middleware.isCommentOwner, function(req,res){
	//Récupération id commentaire
	var idCommentaire = req.params.com_id;
	//Suppression commentaire
	Commentaire.findByIdAndRemove(idCommentaire, function(err){
		if(err){
			console.log(err);
			res.redirect("back");
		} else {
			//Redirection vers l'annonce + flash message succes
			req.flash("success","Commentaire supprimé.");
			res.redirect("/annonces/" + req.params.id);
		}
	});
});

//On exporte ensuite la route
module.exports = router;