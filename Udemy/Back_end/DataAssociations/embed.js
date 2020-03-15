//-----------CONFIG-------------
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dataAssociations", {useNewUrlParser: true});

//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);


//USER - email, nom
var userSchema = new mongoose.Schema({
	nom: 	String,
	email: 	String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



var newUser = new User({
	nom: "Harry Potter",
	email: "harry-potter@gmail.com",
});

newUser.posts.push({
	title: "How to be a witch",
	content: "I don't know actually"
});

newUser.save(function(err,newlyUser){
	if(err){
		console.log(err);
	} else {
		console.log("New user created :");
		console.log(newlyUser);
	}
});






//-----------AJOUT DB-------------
//Nouvel User
//User.create(
//	{
//		nom: "Harry Potter",
//		email: "harry-potter@gmail.com",
//		posts: [postSchema]
//	},
//	function (err,newlyUser){
//		if (err){
//			console.log(err);
//		} else {
//			console.log(newlyUser);
//		}	
//	}
//);

//Nouveau post
//Post.create(
//	{
//		title: "1er post",
//		content: "Jean-Mich va raconter sa vie"
//	},
//	function(err,newlyPost){
//		if (err){
//			console.log(err);
//		} else {
//			console.log("Nouveau Post :");
//			console.log(newlyPost);
//		}
//	}
//);
