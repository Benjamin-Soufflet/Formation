var mongoose = require("mongoose");

//USER - email, nom
var userSchema = new mongoose.Schema({
	nom: 	String,
	email: 	String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});

module.exports = mongoose.model("User", userSchema);
