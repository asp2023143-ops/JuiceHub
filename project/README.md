🍹 JuiceHub – Digital Healthy Juice & Smoothie Recipe Book
📖 Project Description

JuiceHub is a responsive web application developed for the COM 2303 – Web Design Mini Project at Rajarata University of Sri Lanka.

This website provides a digital platform where users can explore different juice, smoothie, vegetable juice, and detox drink recipes made from natural ingredients. The application allows users to browse recipes, search and filter them by category, and submit their own recipes through a form.

The project demonstrates the use of HTML, CSS, Bootstrap, and JavaScript to build an interactive and responsive web application.

🎯 Objectives

Provide a collection of healthy juice and smoothie recipes.

Promote healthy lifestyle habits.

Allow users to search and filter recipes easily.

Demonstrate front-end web development skills.

🛠 Technologies Used

HTML5 – Web page structure

CSS3 – Styling and layout design

Bootstrap 5 – Responsive design and UI components

JavaScript (ES6+) – Dynamic functionality and interactivity

✨ Features

Responsive Navigation Bar

Image Carousel on the homepage

Dynamic Recipe Filtering

Live Search Function

Recipe Cards with Images

Modal Popup for Recipe Details

Recipe Submission Form

Client-Side Form Validation

Fully Responsive Design

📄 Website Pages
🏠 Home Page (index.html)

Hero image carousel

Introduction section

Benefits of natural juices

Featured recipe preview

🍓 Recipes Page (recipes.html)

Search bar

Category filter buttons

Dynamic recipe cards

Modal window with full recipe details

📩 Submit Recipe Page (contact.html)

Recipe submission form

JavaScript form validation

Success confirmation modal

📂 Project Structure

```
JuiceHub/
│
├── project/
│   ├── index.php                    # Home page with featured recipes (limited to 3)
│   ├── recipes.php                  # Recipes page with search and filter
│   ├── login.php                    # User login page
│   ├── register.php                 # User registration page
│   ├── dashboard.php                # User dashboard
│   ├── submit_recipe.php            # Recipe submission form
│   ├── contact.php                  # Contact page
│   ├── database.sql                 # Database schema
│   ├── README.md                    # Project documentation
│   │
│   ├── auth/
│   │   ├── login.php                # Authentication - login handler
│   │   ├── logout.php               # Authentication - logout handler
│   │   └── register.php             # Authentication - registration handler
│   │
│   ├── css/
│   │   └── style.css                # Main stylesheet
│   │
│   ├── js/
│   │   └── script.js                # Main JavaScript file
│   │                                # - Recipe display logic (3 per page limit)
│   │                                # - Search functionality
│   │                                # - Filter functionality
│   │
│   ├── includes/
│   │   ├── db.php                   # Database connection
│   │   ├── functions.php            # Helper functions
│   │   ├── get_recipes.php          # Fetch recipes from database (API)
│   │   ├── process_contact.php      # Handle contact form submission
│   │   └── submit_recipe_handler.php # Handle recipe submission
│   │
│   └── images/
│       └── [recipe and UI images]
│
└── .gitignore
```

🚀 How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/asp2023143-ops/JuiceHub.git
   ```

2. **Setup Local Server**
   - Install XAMPP or any PHP server
   - Place project in `htdocs` folder: `c:\xampp\htdocs\JuiceHub\project\`

3. **Database Setup**
   - Open phpMyAdmin: `http://localhost/phpmyadmin`
   - Create a new database named `juicehub`
   - Import `project/database.sql`

4. **Update Database Connection** (if needed)
   - Edit `project/includes/db.php`
   - Update database credentials

5. **Run the Project**
   - Start Apache and MySQL in XAMPP
   - Visit: `http://localhost/JuiceHub/project/`

📋 Features Summary

✅ **Home Page** – Shows only 3 featured recipes with "View All Recipes" button
✅ **Recipes Page** – Displays all recipes with search and category filtering
✅ **User Authentication** – Login and registration system
✅ **Recipe Submission** – Users can submit new recipes
✅ **Responsive Design** – Mobile-friendly layout
✅ **Dynamic Filtering** – Search and filter recipes by category
✅ **Database Integration** – Recipes stored in MySQL database

👨‍🎓 Student Information

Name: V.I. Chandralal

University: Rajarata University of Sri Lanka
Faculty: Faculty of Applied Sciences

Course: COM 2303 – Web Design Mini Project

📅 Year

2026