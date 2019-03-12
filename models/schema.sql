DROP DATABASE IF EXISTS games_db;

CREATE DATABASE games_db;

USE games_db;

CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  game_name VARCHAR(255) NULL,
  type BOOLEAN NULL,
  genre BOOLEAN NULL,
  number_of_players INT NOT NULL,
  educational BOOLEAN NULL,
  mature_audience BOOLEAN NULL,
  PRIMARY KEY (id)
);
