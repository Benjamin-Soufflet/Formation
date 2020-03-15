//Appel au framework dans l'app
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//Variables
var friends = ["Ben","Romain","Pierre","Flo","Etienne"];

//Appel au body parser
app.use(bodyParser.urlencoded({extended: true}));

//Appel aux assets 
//app.use(express.static("public"));



//----------------------------------------------------------------------
//                            ROUTES
//----------------------------------------------------------------------

app.get("/",function(req, res){
    res.render("home.ejs");
});

app.get("/friends",function(req, res){
    res.render("friends.ejs",{friends: friends});
});

//--------POST request
app.post("/addfriend", function(req, res){
    //On choppe l'entrée saisie dans la requete
    var newFriend = req.body.newfriend;
    
    //On push l'entrée dans le tableau friends
    friends.push(newFriend);
    
    //Redirection vers la vue qui affiche les valeurs du tableau:
    res.redirect("/friends");
});

//lancement du server sur le port demandé
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started !!");
});