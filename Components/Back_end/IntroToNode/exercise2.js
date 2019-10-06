function average(scores){
    //add all scores
    var tot = 0;
    scores.forEach(function(score){
        tot += score;
    });
    
    //Autre variante de loop
    //for (var i = 0; i < scores.length ; i++ ) {
    //    tot += scores[i];
    //    
    //}
    
    //divide by total number of scores
    var avg = tot/scores.length;
    
    //round average
    return Math.round(avg) ;
};

console.log("Average score 1 :");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //shoud be 94

console.log("Average score 2 :");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //shoud be 68
