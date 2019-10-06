var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true});


//Création d'un schema d'objet
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});
//On transforme le schéma en objet Cat
var Cat = mongoose.model("Cat", catSchema);

//----------------------------------------------------------------------
//                            Ajout d'un élement
//----------------------------------------------------------------------
//Ajout d'un élement dans le DB
var scar = new Cat({
	name: "Shenzi",
	age: 1,
	temperament: "Caline"
});

//Enregistrement du nouveau cat
scar.save(function(err, cat){
	if(err){
		console.log("Problem d'ajout db!");
	} else {
		console.log("Nouveau cat sauvegardé en db :");
		//On affiche cat directement from db
		console.log(cat);
	}
});

//Ou alors utiliser la méthode create directement
Cat.create({
	name: "George",
	age: 8,
	temperament: "Inconnu"
}, function(err, newCat){
	if(err){
		console.log(err);
	} else {
		console.log("Nouveau cat:");
		console.log(newCat);
	}
});

//----------------------------------------------------------------------
//                            Afficher tous les élements
//----------------------------------------------------------------------
Cat.find({},function(err,cats){
	if(err){
		console.log("Erreur d'affichage");
		console.log(err);
	} else{
		console.log("All the cats :");
		console.log(cats);
	}
});
