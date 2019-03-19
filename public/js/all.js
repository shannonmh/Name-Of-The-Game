$.get("/api/games", function(data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "game-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now  we add our book data to the well we just placed on the page
      $("#game-well-" + i).append("<h2>Game Name: " + (i + 1) + ". " + data[i].game_name + "</h2>");
      $("#game-well-" + i).append("<h3>Type: " + data[i].author + "</h3>");
      $("#game-well-" + i).append("<h3>Genre: " + data[i].genre + "</h3>");
    }
  });