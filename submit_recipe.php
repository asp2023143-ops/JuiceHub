<?php
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $title = $_POST['title'] ?? '';
    $category = $_POST['category'] ?? '';
    $image_url = $_POST['image'] ?? '';
    $ingredients = $_POST['ingredients'] ?? '';
    $instructions = $_POST['instructions'] ?? '';

    if (!empty($title) && !empty($category) && !empty($ingredients) && !empty($instructions)) {
        try {
            // Insert recipe into the database
            $stmt = $pdo->prepare("INSERT INTO recipes (title, category, image_url, ingredients, instructions) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$title, $category, $image_url, $ingredients, $instructions]);
            echo "Your recipe has been submitted successfully!";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        echo "Please fill in all required fields.";
    }
}
?>
