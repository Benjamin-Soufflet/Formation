var mongoose = require("mongoose");

//Modele Schema : Commentaire
var commentaireSchema = new mongoose.Schema({
	texte: String,
	username: String
});

module.exports = mongoose.model("Commentaire", commentaireSchema);