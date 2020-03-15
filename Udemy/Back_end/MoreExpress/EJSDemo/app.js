//Appel au framework dans l'app
var express = require("express");
var app = express();


//Appel aux assets 
app.use(express.static("public"));



//----------------------------------------------------------------------
//                            ROUTES
//----------------------------------------------------------------------

app.get("/",function(req, res){
    res.render("home.ejs");
});

//----------------HOW TO: Récupérer les paramètres en entrée et les retourner côté vue
app.get("/services/:thing",function(req, res) {

    
    //On récupère le paramètre animal et on va chercher son sound dans le tableau
    var service = req.params.thing;
    
    //On renvoit la réponse en attribuant la valeur à la variable serviceVar du HTML
    res.render("services.ejs",{serviceVar: service});
});

//----------------HOW TO: Transmettre les données au templates ejs loopés
app.get("/posts",function(req, res) {
    var posts = [
        {title: "Post 1", auteur: "Jean-Mich"},
        {title: "Post 2", auteur: "Mich-Mich"},
        {title: "Post 3", auteur: "Jean-Jean"}
        ];
        
        //rendu
        res.render("posts.ejs",{posts: posts});
});

//lancement du server sur le port demandé
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started !!");
});