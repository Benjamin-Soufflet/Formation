//Configuration
var mongoose = require("mongoose");

//Models
var Annonce = require("./models/annonce");
var Commentaire   = require("./models/commentaire");

//Data
var data = [
        {
            name: "Maison cassée", 
            image: "https://freshome.com/wp-content/uploads/2015/10/Split-House-by-Kovac-Design-Studio.jpg",
			description: "Petite villa Californienne. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Piscine et brasero", 
            image: "https://robbreportedit.files.wordpress.com/2019/02/newsom-1.jpg?w=1000",
            description: "Sympa pour contempler sa piscine et son feu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Canyon Floor", 
            image: "https://cupofjo.com/wp-content/uploads/2017/08/tiny-home-tour-california.jpg",
            description: "Vous souhaitez vous refocaliser sur vous même ? Rien de mieux que cette Tiny house ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

//old version without async
function seedDB(){
	//Supprimer toutes les annonces
	Annonce.deleteMany({},function(err){
		if(err){
			console.log(err);
		} else {
			console.log("Annonces supprimées.");
			//Ajout des annonces de l'array data
			data.forEach(function(annonce){
				//Création d'une annonce
				Annonce.create(annonce,function(err,createdAnnonce){
					if(err){
						console.log(err);
					} else {
						//Annonce créée mais pas encore associée à l'annonce
						console.log("Annonce créée !");
						Commentaire.create(
							{
								texte: "C'est très beau !",
								auteur: "Homer"
							},
							function(err,createdCommentaire){
								if (err){
									console.log(err);
								} else {
									//On associe le commentaire à l'annonce
									createdAnnonce.commentaires.push(createdCommentaire);
									//Save en DB ensuite
									createdAnnonce.save();
									console.log("Commentaire créé et associé à l'annonce");
								}
							}
						);
					}
				});
			});
		}
	});
}

module.exports = seedDB;
