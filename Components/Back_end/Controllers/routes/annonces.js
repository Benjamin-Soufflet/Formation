//======================================================================
//                            Routes ANNONCES
//======================================================================

//appel au routeur d'express
var express = require("express");
var router = express.Router();
//Ajout Middleware
var middleware = require("../middleware/index");

//Ajout des modèles
var Annonce = require("../models/annonce");

//Import du Controller
var AnnoncesController = require('../controllers/annonces.js');

//------- INDEX - Affichage des annonces-------------------
router.get("/annonces", AnnoncesController.annonces_show_all);


//On exporte ensuite la route
module.exports = router;