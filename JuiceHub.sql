CREATE DATABASE IF NOT EXISTS JuiceHub;
USE JuiceHub;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    image_url TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Demo Data
INSERT INTO users (username, email, password) VALUES 
('demo_user', 'demo@example.com', 'password123'),
('admin', 'admin@juicehub.local', 'adminpass');

INSERT INTO contacts (name, email, message) VALUES 
('Jane Doe', 'jane@example.com', 'This recipe app is amazing! The juices look delicious.'),
('Bob Smith', 'bob@example.com', 'Could you add some keto recipes?');

INSERT INTO recipes (title, category, image_url, ingredients, instructions) VALUES 
('Morning Glow', 'fruit', 'https://example.com/glow.jpg', 'Apple\nCarrot\nGinger', 'Step 1: Wash all ingredients.\nStep 2: Blend until smooth.'),
('Green Detox', 'detox', 'https://example.com/green.jpg', 'Spinach\nKale\nLemon\nWater', 'Step 1: Wash vegetables.\nStep 2: Juice everything together.');
