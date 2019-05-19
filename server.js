// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

//create application with JSON parser
var jsonParser = bodyParser.json()

//set up to handle data parsing
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({type: 'text/html'}));

require("./app/routing/htmlRoutes.js")(app);


//start the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost" + PORT);
  });


