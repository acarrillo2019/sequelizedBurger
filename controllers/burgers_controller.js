var db = require("../models");

// Routes
//
module.exports = function (app) {
// Get all burger data from db
  app.get("/", function(req, res) {
    db.burgers.findAll({})
    .then (function(cb){ 
      console.log(`cb: " ${JSON.stringify(cb)}`);
      res.render("index", {burgers:cb});
    });
  });

  // Add new burger to db
  app.post("/api/burgers", function(req, res){
    db.burgers.create({
      burger_name: req.body.burger_name
    }).then (function(cb) {
      res.redirect("/");
    })
  });