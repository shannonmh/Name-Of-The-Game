var db = require("../models");

 var path = require("path");

module.exports = function (app) {
  // Load home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
    // games_db.games.findAll({}).then(function(games_db) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: games_db
    //   });
    // });
  });


  // // Load suggestedGames page based on id
  // app.get("/suggestedGames/:id", function (req, res) {
  //   res.sendFile(path.join(_dirname, '../public/suggestedGames.html'))
  //   // games_db.Example.findOne({ where: { id: req.params.id } }).then(function(games_db) {
  //   //   res.render("example", {
  //   //     example: games_db
  //   //   });
  //   // });
  // });


  // Load gamesQuiz page
  app.get("/gamesQuiz", function (req, res) {
    res.sendFile(path.join(_dirname, '../public/gamesQuiz.html'))
  });


  // Load viewAllGames page
  app.get("/viewAllGames", function (req, res) {
    res.sendFile(path.join(_dirname, '../public/viewAllGames.html'))
  });


  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
