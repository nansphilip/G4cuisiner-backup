-- Creates a database
CREATE DATABASE `g4cuisiner-db`;

-- Selects the new database
USE `g4cuisiner-db`;

-- Creates an user and a password
CREATE USER 'g4cuisiner-user'@'localhost' IDENTIFIED BY 'g4cuisiner-password';

-- Allows user to connect to database
GRANT ALL PRIVILEGES ON *.* TO 'g4cuisiner-user'@'localhost';
