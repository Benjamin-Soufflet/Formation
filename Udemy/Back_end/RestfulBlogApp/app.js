//----------------------------------------------------------------------
//                            Configuration
//----------------------------------------------------------------------
var express =	require("express"),
	expressSanitizer = require("express-sanitizer"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	mongoose = require("mongoose"),
	app 	= 	express();

//Connexion DB
mongoose.connect("mongodb://localhost/restful_blog", {useNewUrlParser: true});
//Set for Mongoose deprication commands
mongoose.set('useFindAndModify', false);

//assets (customs CSS)
app.use(express.static(__dirname + "/public"));

//Intégration du body-parser express
app.use(bodyParser.urlencoded({extended: true}));

//Intégration du Sanitizer à Express (APRES PARSER)
app.use(expressSanitizer());

//Intégration du overrider de méthode (pour les formulaires RESTFUL)
app.use(methodOverride("_method"));

//----------------------------------------------------------------------
//                            Variables
//----------------------------------------------------------------------
//Mongoose/Model Config
var articleSchema = new mongoose.Schema({
	title: String,//
	image: String,
	body: String,
	created : {type: Date, default: Date.now}
});
//Création du modèle Article (=classe)
var Article = mongoose.model("Article", articleSchema);


//----------------------------------------------------------------------
//                         RESTFUL Routes
//----------------------------------------------------------------------
app.get("/",function(req,res){
	res.redirect("/articles");
});

//---------INDEX ROUTE---------
app.get("/articles", function(req,res){
	//Chopper toutes les annonces de la db
	Article.find({}, function(err, allArticles){
		if(err){
			console.log(err);
		} else {
			//Envoie des data à la vue
			res.render("index.ejs",{articles: allArticles});
		}
	});	
});

//---------NEW ROUTE---------
app.get("/articles/new", function(req,res){
	//Direction page formulaire
	res.render("new.ejs");
});

//---------CREATE ROUTE---------
app.post("/articles", function(req,res){
	//Sanitize le body du formulaire pour lutter contre les failles XSS
	req.body.article.body = req.sanitize(req.body.article.body);
	//Récupération du formulaire 
	var newArticle = req.body.article;
	//Création de l'article
	Article.create(newArticle, function(err,newlyCreatedArticle){
		if(err){
			//Si erreur on affiche l'erreur et on redirige vers le formulaire de création
			console.log(err);
			res.render("new.ejs");
		}else{
			//Redirection vers les articles
			res.redirect("/articles");
		}
	});
});

//---------SHOW ROUTE---------
app.get("/articles/:id", function(req,res){
	//Récupération ID
	var idArticle = req.params.id;
	//Récupération objet en DB
	Article.findById(idArticle,function(err,foundArticle){
		if(err){
			console.log(err);
			res.redirect("/articles");
		} else {
			//Affichage template show avec l'objet récupéré
			res.render("show.ejs", {article: foundArticle });
		}
	});
});

//---------EDIT ROUTE---------
app.get("/articles/:id/edit", function(req,res){
	//Récupération article
	var idArticle = req.params.id;
	//Récupération objet en DB
	Article.findById(idArticle,function(err,foundArticle){
		if(err){
			console.log(err);
			res.redirect("/articles");
		} else {
			//Afficher le formulaire d'EDIT
			res.render("edit.ejs", {article: foundArticle});
		}
	});
});

//---------UPDATE ROUTE---------
app.put("/articles/:id", function(req,res){
	//Sanitize le body de l'article pour lutter contre les failles XSS
	req.body.article.body = req.sanitize(req.body.article.body);
	//Récupération id article
	var idArticle = req.params.id;
	//Récupération objet nouvel version de l'article du formulaire 
	var newArticle = req.body.article;
	Article.findByIdAndUpdate(idArticle, newArticle, function(err, updatedArticle){
		if (err){
			console.log(err);
			res.redirect("index.ejs");
		} else{
			res.redirect("/articles/" + idArticle);
		}
	});
});

//---------DELETE ROUTE---------
app.delete("/articles/:id", function(req,res){
	//Récupération id article
	var idArticle = req.params.id;
	Article.findByIdAndRemove(idArticle, function(err){
		if(err){
			console.log(err);
			res.redirect("/articles");
		} else {
			res.redirect("/articles");
		}
	});
});

//----------------------------------------------------------------------
//                            Server
//----------------------------------------------------------------------
app.listen(3000, () => {
    console.log("Blog Server has started !!");
});