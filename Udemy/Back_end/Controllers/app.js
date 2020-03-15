//======================================================================
//                            Configuration
//======================================================================
var express 	= require("express"),
	app 		= express(),
	mongoose 	= require("mongoose");


//======================================================================
//                     Variables & Models
//======================================================================

//Modèles (=classes)
var Annonce = require("./models/annonce"),
	Commentaire = require("./models/commentaire");

//======================================================================
//                            ROUTES (RESTFUL)
//======================================================================
//Chemin des Routes
var commentRoutes = require("./routes/commentaires"),
	annonceRoutes = require("./routes/annonces");


app.use(commentRoutes);
app.use(annonceRoutes);

//----------------------------------------------------------------------
//                            SERVER PORT
//----------------------------------------------------------------------

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});