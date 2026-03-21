<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipes | JuiceHub</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>

    <!-- Header / Navbar -->
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <img src="https://cdn-icons-png.flaticon.com/512/5825/5825340.png" alt="JuiceHub Logo"
                    class="navbar-logo">
                JuiceHub
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                    <li class="nav-item"><a class="nav-link active" href="recipes.php">Recipes</a></li>
                    <li class="nav-item"><a class="nav-link" href="submit_recipe.php">Submit Recipe</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.php">Contact Us</a></li>
                    <?php if (isset($_SESSION['user_id'])): ?>
                        <li class="nav-item"><a class="nav-link" href="dashboard.php">Dashboard</a></li>
                        <li class="nav-item"><a class="nav-link" href="auth/logout.php">Logout</a></li>
                    <?php else: ?>
                        <li class="nav-item"><a class="nav-link" href="login.php">Login</a></li>
                        <li class="nav-item"><a class="nav-link" href="register.php">Register</a></li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>

    <main class="py-5">
        <div class="container">
            <div class="section-title">
                <h2>Explore Recipes</h2>
                <p>Find the perfect blend for your mood and health goals.</p>
            </div>
            <div class="row mb-5 g-3 align-items-center">
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group-text bg-white border-end-0"><i
                                class="fas fa-search text-muted"></i></span>
                        <input type="text" id="recipeSearch" class="form-control border-start-0 ps-0"
                            placeholder="Search juices...">
                    </div>
                </div>
                <div class="col-md-6 text-md-end">
                    <div class="d-flex flex-wrap justify-content-md-end gap-2" id="filterOptions">
                        <button class="filter-btn active" data-category="all">All</button>
                        <button class="filter-btn" data-category="fruit">Fruit</button>
                        <button class="filter-btn" data-category="smoothie">Smoothies</button>
                        <button class="filter-btn" data-category="vegetable">Veggie</button>
                        <button class="filter-btn" data-category="detox">Detox</button>
                    </div>
                </div>
            </div>
            <div class="row g-4" id="recipeGrid"></div>
        </div>
    </main>

    <!-- Modal and Footer (same as index.php) -->
    <div class="modal fade" id="recipeModal" tabindex="-1">...</div>

    <footer class="mt-5 py-4 bg-light text-center">
        <p class="mb-0 small text-muted">&copy; 2026 JuiceHub. All rights reserved.</p>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js?v=1.1"></script>
</body>
</html>
