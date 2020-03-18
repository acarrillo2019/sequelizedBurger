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

    // Add customer to db
    app.post("/api/customers", function(req, res){
      db.customers.create({
        customer_name: req.body.customer_name
      }).then (function(cb) {
        res.status(200).end();
      })
    });
  
    // Update burger entry in db
    app.put("/api/burgers/:id", function(req, res){
      var condition = {id: `${req.params.id}`};
      db.burgers.update({devoured: req.body.devoured}, {
        where: condition
      }).then (function(result){
        if (result.changedRows == 0){
          return res.status(404).end();
        }
        else{
          res.status(200).end();
        }
      });
    });

      // Delete burger entry in db
  app.delete("/api/burgers/:id", function(req, res){
    var condition = {id: `${req.params.id}`};
    db.burgers.destroy({
      where: condition
    }).then (function(result){
      if (result.affectedRows == 0){
        return res.status(404).end();
      }
      else{
        res.status(200).end();
      }
    })
  })
}