<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: auth/login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard | JuiceHub</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-light">
    <nav class="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.php">JuiceHub</a>
            <div class="ms-auto d-flex align-items-center">
                <span class="me-3">Welcome, <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong>!</span>
                <a href="auth/logout.php" class="btn btn-outline-danger btn-sm">Logout</a>
            </div>
        </div>
    </nav>

    <main class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm p-4 text-center">
                        <i class="fas fa-plus-circle fa-4x text-success mb-3"></i>
                        <h5>Submit a Recipe</h5>
                        <p class="text-muted small">Share your secret blend with our community.</p>
                        <a href="submit_recipe.php" class="btn btn-success rounded-pill px-4">Submit</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm p-4 text-center">
                        <i class="fas fa-heart fa-4x text-danger mb-3"></i>
                        <h5>Your Favorites</h5>
                        <p class="text-muted small">Manage the juices you've saved.</p>
                        <a href="recipes.php" class="btn btn-danger rounded-pill px-4">See Saved</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
