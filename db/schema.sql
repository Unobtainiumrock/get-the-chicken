DROP DATABASE IF EXISTS chickens_db;
CREATE DATABASE chickens_db;

USE chickens_db;

CREATE TABLE chickens (
  id INTEGER AUTO_INCREMENT,
  chicken_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
