//require friends.js file
var friends = require("../data/friends.js")

//Route
module.exports = function (app) {

//GET Request
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

//POST Request
app.post("/api/friends", function(req, res) {

    //compare user data for a match
    var totalDifference = 0;

    //object to hold the best match
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

    //parse the user score into a number
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });

    userData = {
        "name": req.body.name,
        "photo": req.body.photo,
        "scores": b
    };

    console.log("Name: " + userName);
    console.log("User score " + userScores);

    //calculate the sum of the scores
    var sum = b.reduce((a,b) => a + b, 0);
    console.log("Total Score: " + sum);
    console.log("Difference of Best Match: " + bestMatch.friendDifference);

    //loop through all the friend possiblities in the database
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        console.log("Total Difference: " + totalDifference);
        console.log("Best match friend difference: " + bestMatch.friendDifference);

        var bScore = friends[i].scores.reduce((a, b) => a + b, 0);
        totalDifference += Math.abs(sum - bScore);

        if(totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
    }
    friends.push(userData);
    res.json(bestMatch);
});

};
