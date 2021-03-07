-- this assumes the database dating_app already exists and we're running
-- in a connection alreading using it.

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
username VARCHAR (30) NOT NULL UNIQUE,
isDeveloper TINYINT (1) NOT NULL DEFAULT 0,
email VARCHAR (50) NOT NULL UNIQUE,
firstName VARCHAR (50) NOT NULL,
lastName VARCHAR (50) NOT NULL,
password VARCHAR (255) NOT NULL,
createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (username));