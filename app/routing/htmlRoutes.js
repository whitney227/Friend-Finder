//Dependency
var path = require('path');

module.exports = function(app){
    
    //Survey Route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //Home Route
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}