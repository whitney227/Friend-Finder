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

    
})


//POST route for incoming survey results

};
