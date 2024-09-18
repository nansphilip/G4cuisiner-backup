-- Creates a database
CREATE DATABASE `gcuisiner-db`;

-- Selects the new database
USE `gcuisiner-db`;

-- Creates an user and a password
CREATE USER 'gcuisiner-user'@'localhost' IDENTIFIED BY 'gcuisiner-password';

-- Allows user to connect to database
GRANT ALL PRIVILEGES ON *.* TO 'gcuisiner-user'@'localhost';
