//-----------CONFIG-------------
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dataAssociations-2", {useNewUrlParser: true});

//-----------Modèles Objets-------------

var Post = require("./models/post");
var User = require("./models/user");

//User.create(
//	{
//		nom: "Bob",
//		email: "bob@gmail.com"
//	},
//	function(err, createdUser){
//		console.log("User created :");
//		console.log(createdUser);
//		
//	}
//);

//--------------------OPERATIONS


//CREER UN POST ET L'ASSOCIER A UN USER
Post.create(
{
	title: "Comment associer un post à un user - part 4",
	content: "On est justement en train de le faire"
}, 
function(err,createdPost){
	//S'il n'y a pas d'erreur on l'associe à un user en le cherchant
	User.findOne({email: "bob@gmail.com"}, function(err,foundUser){
		if (err){
			console.log(err);
		} else {
			//On l'associe alors à ce user
			foundUser.posts.push(createdPost);
			//on le save en DB
			foundUser.save(function(err, updatedUser){
				if (err){
					console.log(err);
				} else {
					console.log("User " + updatedUser.nom +" updated :");
					console.log(updatedUser);//
				}
			});
		}
	});
});

//TROUVER LES POSTS pour un user
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, foundUser){
	if (err){
		console.log(err);
	} else {
		console.log(foundUser);
	}
});