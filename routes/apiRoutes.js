var path = require("path")

var games_db = require("../models");

//Export API rout
module.exports = function(app) {
  // Get all examples
  app.get("/api/games", function(req, res) {
    games_db.games.findAll({}).then(function(games_db) {
      res.json(games_db);
    });
  });

  // Create a new example
  app.post("/api/games", function(req, res) {
    games_db.games.create(req.body).then(function(games_db) {
      res.json(games_db);
    });
  });

  // Delete an example by id
  app.delete("/api/games/:id", function(req, res) {
    games_db.games.destroy({ where: { id: req.params.id } }).then(function(games_db) {
      res.json(games_db);
    });

    
  });
};
