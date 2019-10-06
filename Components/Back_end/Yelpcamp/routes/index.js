//Routeur d'express
var express		= require("express");
var router		= express.Router();
var passport	= require("passport");

//Modèles
var User = require("../models/user");

//-------HOMEPAGE-------------------------------------
router.get("/",function(req,res){
	res.render("landing.ejs");
});

//------------------------
// ROUTES AUTHENTIFICATION
//------------------------
//INSCRIPTION
//-- Formulaire
router.get("/register",function(req,res){
	res.render("register.ejs");
});

//--Inscription user
router.post("/register",function(req,res){
	var newUser = new User({username: req.body.username});
	//On enregistre le username et transmet le password qui sera hashé
	User.register(newUser, req.body.password, function(err,newlyUser){
		if(err){
			req.flash("error", err.message);
			return res.render("register.ejs");
		}
		//Connecte le user(session) strategie locale
		passport.authenticate("local")(req, res, function(){
			//Redirection vers les annonces et message inscription réussie
			req.flash("success", "Inscription réussie, bienvenue " + newlyUser.username + " !" );
			res.redirect("/annonces");
		});	   
	});
});

//CONNEXION
//-- Formulaire
router.get("/login",function(req,res){
	res.render("login.ejs");
});

//-- Connexion
router.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/annonces",
		failureRedirect: "/login"
	}),function(req,res){
});

//DECONNEXION
router.get("/logout", function(req,res){
	//logout process
	req.logout();
	//Notification de succes de logout
	req.flash("success", "Vous etes déconnecté à votre compte!");
	//Redirection vers les Annonces
	res.redirect("/annonces");
});

//On exporte ensuite la route
module.exports = router;