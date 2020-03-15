
var movies = [
    {
		title: "In Bruges",
		hasWatched: true,
		rating: 5
    },
	{
		title: "Frozen",
		hasWatched: false,
		rating: 4.5
    },
	{
		title: "Mad Max",
		hasWatched: true,
		rating: 5
    },
	{
		title: "Les Miserables",
		hasWatched: false,
		rating: 3.5
    }
];

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" + " - ";
	result += movie.rating + " stars.";
	console.log(result);
});

/*other way to do it 
movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars.";
	console.log(result);
})
*/

/* with a function now */
function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" + " - ";
	result += movie.rating + " stars.";
	return(result);
};

/* call et affichage de la fonction */
movies.forEach(function(movie){
	console.log(buildString(movie));
});

