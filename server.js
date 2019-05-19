// Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

app.get("/", function (req, res) {
  res.sendFile(path.join__dirname, "home.html")
});

app.get("/survey", function(req, rest) {
  res.sendFile(path.join(__dirname, "survey.html"))
});

//start the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


