var mongoose = require("mongoose");

//Modele Schema : Commentaire
var commentaireSchema = new mongoose.Schema({
	texte: String,
	auteur: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

module.exports = mongoose.model("Commentaire", commentaireSchema);