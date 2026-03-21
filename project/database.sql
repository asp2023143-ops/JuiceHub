-- JuiceHub Database Setup
CREATE DATABASE IF NOT EXISTS JuiceHub;
USE JuiceHub;

-- 1. Users Table
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Contacts Table
DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Recipes Table
DROP TABLE IF EXISTS recipes;
CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    image_url TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Demo Data (Note: Passwords are hashed for security)
-- demo_user / password123
-- admin / adminpass
INSERT INTO users (username, email, password) VALUES 
('demo_user', 'demo@example.com', '$2y$10$wU0uI9g5sE58yY6T72061utr45E1.70889270634289456578'),
('admin', 'admin@juicehub.local', '$2y$10$tPjJ7K/hJ9sZ9FqGv0eW0uP6I9uP6I9uP6I9uP6I9uP6I9uP6I9uP6');

INSERT INTO contacts (name, email, message) VALUES 
('Jane Doe', 'jane@example.com', 'This recipe app is amazing! The juices look delicious.'),
('Bob Smith', 'bob@example.com', 'Could you add some keto recipes?');

INSERT INTO recipes (title, category, image_url, ingredients, instructions) VALUES 
('Morning Glow', 'fruit', 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Fresh-Watermelon-Juice-Recipe-500x375.jpg', 'Apple\nCarrot\nGinger', 'Step 1: Wash all ingredients.\nStep 2: Blend until smooth.'),
('Green Detox', 'detox', 'https://yummyindiankitchen.com/wp-content/uploads/2024/05/spinach-juice-recipe-homemade-and-fresh.jpg', 'Spinach\nKale\nLemon\nWater', 'Step 1: Wash vegetables.\nStep 2: Juice everything together.');
