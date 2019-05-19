//require friends.js file
var friends = reequire("../data/friends.js")

//Route
module.exports = function (app) {

//GET Request
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

//POST Request
app.post("/api/friends", function(req, res) {

    //
})


//POST route for incoming survey results

};
