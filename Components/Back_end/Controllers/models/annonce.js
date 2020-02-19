var mongoose = require("mongoose");

//Modele Schema : annonce
var annonceSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	commentaires: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Commentaire"
		}
	]
});

//Création du modèle Annonce (=classe)
module.exports = mongoose.model("Annonce", annonceSchema);