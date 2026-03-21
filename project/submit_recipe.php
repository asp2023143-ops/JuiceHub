<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Recipe | JuiceHub</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <img src="https://cdn-icons-png.flaticon.com/512/5825/5825340.png" alt="JuiceHub Logo" class="navbar-logo">
                JuiceHub
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="recipes.php">Recipes</a></li>
                    <li class="nav-item"><a class="nav-link active" href="submit_recipe.php">Submit Recipe</a></li>
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
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title">
                        <h2>Join Our Community</h2>
                        <p>Share your favorite healthy blends with us.</p>
                    </div>
                    <div class="glass-form shadow">
                        <form action="includes/submit_recipe_handler.php" class="js-validated-form" novalidate>
                            <div class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Recipe Title</label>
                                    <input type="text" class="form-control" name="title" placeholder="The Morning Glow" required>
                                    <div class="invalid-feedback">Recipe title is required.</div>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Category</label>
                                    <select class="form-select" name="category" required>
                                        <option value="" selected disabled>Choose category...</option>
                                        <option value="fruit">Fruit Juice</option>
                                        <option value="smoothie">Smoothie</option>
                                        <option value="vegetable">Vegetable Juice</option>
                                        <option value="detox">Detox Drink</option>
                                    </select>
                                    <div class="invalid-feedback">Please select a category.</div>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Image URL</label>
                                    <input type="url" class="form-control" name="image" placeholder="https://image-url.com">
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label">Ingredients (One per line)</label>
                                    <textarea class="form-control" name="ingredients" rows="3" placeholder="Watermelon&#10;Lime" required></textarea>
                                    <div class="invalid-feedback">Ingredients are required.</div>
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label">Instructions</label>
                                    <textarea class="form-control" name="instructions" rows="4" placeholder="Step 1: Blend..." required></textarea>
                                    <div class="invalid-feedback">Instructions are required.</div>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <button type="submit" class="btn btn-submit btn-lg px-5">Submit Recipe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="mt-5 py-4 bg-light text-center">
        <p class="mb-0 small text-muted">&copy; 2026 JuiceHub. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
