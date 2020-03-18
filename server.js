// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


// Setup the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring models for syncing
var db = require("./models");

// Setup the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setup access to static assets
app.use(express.static('public'));

// app.use(routes);
require("./controllers/burgers_controller")(app);


// Start server to listen to client requests.

// Sync sequelize models and then start server to listen to client requests.

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when the server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});