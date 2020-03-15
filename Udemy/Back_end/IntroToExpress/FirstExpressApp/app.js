var express = require("express");
var app = express();


//----------------HOW TO écupérer les paramètres en entrée
app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    //Récupération des entrées de l'URL
    var subbreddit = req.params.subbreddit;
    var id = req.params.id;
    
    //Envoie de la reponse avec les paramètres récupérés
    res.send("Welcome to " + subbreddit +" subbereddit page !");
});

//----------------HOW TO: Récupérer les paramètres en entrée et en retourner des sorties en fonctions
app.get("/speak/:animal",function(req, res) {
    //On crée une association entre animal et son dans un tableau
    var sounds = {
        cochon: "Grouing!",
        Taurreau: "meuuuh!",
        pigeon: "Cuicui !"
    };
    
    //On récupère le paramètre animal et on va chercher son sound dans le tableau
    var animal = req.params.animal;
    var sound = sounds[animal];
    
    //On envoit la réponse concaténée
    res.send("Le " + animal + "Fait : ' " + sound +"'.");
});


//----------------HOW TO effectuer des routes classiques
// "/" => "Hi there !"
app.get("/",function(req, res){
    res.send("Hi there !");
});
// "/dog" => "Whoof !"
app.get("/dog",function(req, res){
    console.log("SOMEONE MADE A REQUEST TO DOGS");
    res.send("Whoof !");
});
// "/by" => "Goodbye !"
app.get("/bye",function(req, res){
    console.log("SOMEONE MADE A REQUEST TO BYE");
    res.send("Goodbye !");
});
// Any other request
app.get("*",function(req, res){
    res.send("error web page :  402!");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started !!");
});