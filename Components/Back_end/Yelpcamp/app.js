//======================================================================
//                            Configuration
//======================================================================
var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	flash 		= require("connect-flash"),
	passport	= require("passport"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	methodOverride = require("method-override");
	

//Suppression et Remplissage DB
var seedDB = require("./seeds");

//appel à la fonction de seed.js
//seedDB();

//Configuration DB DEV ou PROD
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v10";

//Connexion DB
mongoose.connect(url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
});

//Intégration du body-parser dans l'app express
app.use(bodyParser.urlencoded({extended: true}));

//Stylesheets
app.use(express.static(__dirname + "/public"));

//Intégration du overrider de méthode (pour les formulaires RESTFUL)
app.use(methodOverride("_method"));

//Execution Flash notifications
app.use(flash());

//======================================================================
//                     Variables & Models
//======================================================================

//Modèles (=classes)
var Annonce = require("./models/annonce"),
	Commentaire = require("./models/commentaire"),
	User = require("./models/user");

//======================================================================
//                     Authentification setup
//======================================================================
//Sessions Sécurisées
app.use(require("express-session")({
	secret: "Scar est le plus cool",
	resave: false,
	saveUninitialized: false
}));

//Passport setup
app.use(passport.initialize());
app.use(passport.session());

//Intégration de la Strategy locale à passport et call de authenticate
passport.use(new LocalStrategy(User.authenticate()));

//Decode and Encode de session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Passage du user et message flash à chaque route
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error")
	res.locals.success = req.flash("success");
	next();
});

//======================================================================
//                            ROUTES (RESTFUL)
//======================================================================
//Chemin des Routes
var commentRoutes = require("./routes/commentaires"),
	annonceRoutes = require("./routes/annonces"),
	indexRoutes = require("./routes/index.js");


app.use(indexRoutes);
app.use(commentRoutes);
app.use(annonceRoutes);

//----------------------------------------------------------------------
//                            SERVER PORT
//----------------------------------------------------------------------
//app.listen(3000, () => {
//    console.log("Yelpcamp Server has started !!");
//});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});