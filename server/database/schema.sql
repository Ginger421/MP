DROP DATABASE IF EXISTS example_db

CREATE DATABASE example_db

USE example_db

CREATE TABLE first (
    id INT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id),
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);