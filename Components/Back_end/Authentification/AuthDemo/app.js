var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose");

//Connexion DB
mongoose.connect("mongodb://localhost/auth_demo_app", {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
//Run Express
var app = express();

//Intégration du body-parser dans l'app express
app.use(bodyParser.urlencoded({extended: true}));


//Models
var User = require("./models/user");

//CONFIGURATION PASSPORT
//Utiliser les cookies securisés
app.use(require("express-session")({
	secret: "Shenzi est la plus mignone",
	resave: false,
	saveUninitialized: false
}));
//Passport setup
app.use(passport.initialize());
app.use(passport.session());

//Création d'une nouvelle strategy local utilisant la méthode User.authenticate
passport.use(new LocalStrategy(User.authenticate()));
//Decode and Encode the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//-------------
//   ROUTES
//-------------

//------INSCRIPTION
//Formulaire Inscription
app.get("/register", function(req,res){
	res.render("register.ejs");
});

//Inscription du user
app.post("/register", function(req,res){
	//On enregistre le username et transmet le password qui sera hashé
	User.register(new User({username: req.body.username}), req.body.password, function(err,newlyUser){
		if(err){
			console.log(err);
			return res.render("register.ejs");
		}
		//Connecte le user(session) strategie locale
		passport.authenticate("local")(req,res, function(){
			res.redirect("/secret");
		});	   
	});
});

//------CONNEXION
//Formulaire Connexion
app.get("/login", function(req,res){
	res.render("login.ejs");
});
//Connexion User
//middleware passport run avant la callback function
app.post("/login",passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "login"
}), function(req,res){});

//------DECONNEXION
app.get("/logout", function(req,res){
	req.logout();
	res.redirect("/");
});


//Route Secrete avec Authentification
app.get("/secret", isLoggedIn, function(req,res){
	res.render("secret.ejs");
});

//Middleware isLoggedIn
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		//run l'operation suivante (la callback function dans notre cas)
		return next();
	}
	res.redirect("/login");
}
//------HOMEPAGE
app.get("/", function(req,res){
	res.render("home.ejs");
});

//-------------
//   SERVEUR
//-------------
app.listen(3000, () => {
    console.log("Secret Page Server has started !!");
});