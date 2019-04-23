/* creates the database */
CREATE DATABASE burgers_db;
USE burgers_db;
/* creates the table and its traits */
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
