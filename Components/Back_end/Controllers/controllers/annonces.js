//======================================================================
//                            CONTROLLER ANNONCES
//======================================================================
//Ajout des modèles
var Annonce = require("../models/annonce");

exports.annonces_show_all = function(req,res){
	//Envoie des data à la vue
			res.send("Hey On affiche toutes les annonces ici !");
};