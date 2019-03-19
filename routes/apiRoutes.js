var path = require("path");

var Sequelize = require('sequelize');

var games_db = require("../models");

//Export API rout
module.exports = function (app) {
  // Get all examples
  app.get("/api/games", function (req, res) {
    games_db.games.findAll({}).then(function (games_db) {
      res.json(games_db);
    });
  });

  // Get selected games (based off of quiz results)
  app.get("/api/games", function (req, res) {
    var whereCondition = {
      where: {
        genre_Mature: req.params.profile.mature,
        genre_Educational: req.params.profile.educational,
        "type_" + req.params.profile.type: 1
      }
    };

    if (req.params.profile.introvert) {
      whereCondition.where.numberOfPlayers = {
        [Sequelize.Op.lt]: 3
      } 
    } else {
      whereCondition.where.numberOfPlayers = {
        [Sequelize.Op.gt]: 3
      }
    }

    whereCondition.where["genre_" + req.params.profile.genre] = 1;
    whereCondition.where["type_" + req.params.profile.type] = 1;


    games_db.games.findAll(whereCondition).then(function (games_db) {
      res.json(games_db);
    });
  });

  // Create a new example
  app.post("/api/games", function (req, res) {
    games_db.games.create(req.body).then(function (games_db) {
      res.json(games_db);
    });
  });

  // Delete an example by id
  app.delete("/api/games/:id", function (req, res) {
    games_db.games.destroy({ where: { id: req.params.id } }).then(function (games_db) {
      res.json(games_db);
    });


  });
};
