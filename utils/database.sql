DROP DATABASE IF EXISTS inventory_services;

CREATE DATABASE IF NOT EXISTS inventory_service;

USE inventory_service;

CREATE TABLE products (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (id)
);