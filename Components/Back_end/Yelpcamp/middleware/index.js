//======================================================================
//                       Middleware function Object
//======================================================================

var Annonce = require("../models/annonce"),
	Commentaire = require("../models/commentaire");


//Middleware Objet 
var middlewareObj = {};

//Middleware proprio de l'annonce
middlewareObj.isAnnonceOwner = function(req, res, next){
	//if user est connecté
	if(req.isAuthenticated()){
		//Récupération id from requete
		var idAnnonce = req.params.id;
		//Recherche de l'annonce via id
		Annonce.findById(idAnnonce, function(err,foundAnnonce){
			if(err || !foundAnnonce){
				console.log(err);
				req.flash("error","Nous n'avons pas trouvé cette annonce.");
				res.redirect("back");
			} else{
				//Est-ce que le user == l'auteur de l'annonce
				//Méthode mongoose .equals pour comparer car formats différents (objet vs string)
				if(foundAnnonce.auteur.id.equals(req.user._id)){
					//On run les prochaines opérations
					next();
				} else{
					//Redirection s'il n'est pas l'owner de l'annonce
					req.flash("error", "Vous n'avez pas les droits pour effectuer cette opération.");
					res.redirect("back");
				}
			}
		});
	} else {
		//Sinon Redirection + message Flash
		req.flash("error", "Vous devez être connecté pour effectuer cette action.");
		res.redirect("back");
	}
}

//Auteur d'un commentaire
middlewareObj.isCommentOwner = function (req, res, next){
	//if user est connecté
	if(req.isAuthenticated()){
		//Récupération id from requete
		var idCommentaire = req.params.com_id;
		//Recherche de l'annonce via id
		Commentaire.findById(idCommentaire, function(err,foundCommentaire){
			if(err || !foundCommentaire){
				console.log(err);
				req.flash("error","Nous n'avons pas trouvé ce commentaire.");
				res.redirect("back");
			} else{
				//Est-ce que le user == l'auteur du commentaire
				//Méthode mongoose .equals pour comparer car formats différents (objet vs string)
				if(foundCommentaire.auteur.id.equals(req.user._id)){
					//On run les prochaines opération
					next();
				} else{
					req.flash("error", "Vous n'avez pas les permissions pour cette action.");
					res.redirect("back");
				}
			}
		});
	} else {
		//Sinon Redirection
		req.flash("error", "Vous devez être connecté pour effectuer cette action.");
		res.redirect("back");
	}
}

//User loggin
middlewareObj.isLoggedIn = function (req, res, next){
	if(req.isAuthenticated()){
		//run l'operation suivante (la callback function dans notre cas)
		return next();
	}
	//Message Flash de demande de login + redirection
	req.flash("error", "Vous avez besoin d'être connecté d'abord.");
	res.redirect("/login");
}

module.exports = middlewareObj;