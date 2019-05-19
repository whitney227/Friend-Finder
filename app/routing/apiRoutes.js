//require friends.js file
var friends = require("../data/friends.js")

//Route
module.exports = function (app) {

//GET Request
app.get("/api/friends", function (req, res) {
    res.json(friends);
});

//POST Request
app.post("/api/friends", function(req, res) {

    //object to hold the best match
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

    //parse the user's survey POST into a number
    var userData = req.body;
    var userScores = userData.scores;

    //compare user data for a match
    var totalDifference = 0;


    //loop through all the friend possiblities in the database
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

        //nested loop that goes through all the scores of each friend
        for (var j = 0; j < friends[i].scores[j]; j++) {
            //calculate the difference between the scores and sum them into the totalDifference
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            
            if(totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }
    //push the data to the friend array after it's been checked
    friends.push(userData);
    //return the user's bestMatch with JSON
    res.json(bestMatch);
});

};
