// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

//set up to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({type: 'text/html'}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//start the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost" + PORT);
  });


