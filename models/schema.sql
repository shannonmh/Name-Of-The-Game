DROP DATABASE IF EXISTS games_db;

CREATE DATABASE games_db;

USE games_db;

CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  game_name VARCHAR(255) NULL,
  type_dice BOOLEAN NULL,
  type_card BOOLEAN NULL,
  type_board BOOLEAN NULL,
  type_other BOOLEAN NULL,
  genre_ActionAdventure BOOLEAN NULL,
  genre_Strategy BOOLEAN NULL,
  genre_LogicTrivia BOOLEAN NULL,
  genre_Mature BOOLEAN NULL,
  genre_Educational BOOLEAN NULL,
  genre_Fantasy BOOLEAN NULL,
  genre_Mystery BOOLEAN NULL,
  genre_PeoplePlacement BOOLEAN NULL,
  genre_RolePlayer BOOLEAN NULL,
  genre_Other BOOLEAN NULL,
  number_of_players INT NOT NULL,
  
  PRIMARY KEY (id)
);