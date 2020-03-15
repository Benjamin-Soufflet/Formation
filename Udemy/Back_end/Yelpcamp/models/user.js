var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

//Definition Modèle
var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

//Add method of passport-Local-moongoose on our schema
UserSchema.plugin(passportLocalMongoose);

//Création du modèle User (=classe)
module.exports = mongoose.model("User", UserSchema);