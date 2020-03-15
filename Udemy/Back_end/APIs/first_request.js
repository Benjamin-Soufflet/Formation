//Appel au module de requete
var request = require('request');

//Création de la requete (Ne fonctionne plus depuis decommisionning free API)
/*request('http://www.google.com',function(error, response, body){
    if (error){
        console.log("ERREUR !");
        console.log(erreur);
    } else {
        if(response.statusCode == 200){
            //On parse le string pour en faire une objet
           var parsedData = JSON.parse(body);
           console.log(parsedData["query"]["results"]);
        }
    }
});*/

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
    if (!error && response.statusCode == 200){
        var parsedData =JSON.parse(body);
        console.log(parsedData.name + ' lives in ' + parsedData.address.city )
    }
});