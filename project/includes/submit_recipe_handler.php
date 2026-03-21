<?php
require_once 'db.php';

header('Content-Type: application/json');
$response = ['success' => false, 'message' => ''];

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
            $response['success'] = true;
            $response['message'] = "Your recipe has been submitted successfully!";
        } catch (PDOException $e) {
            $response['message'] = "Database error: " . $e->getMessage();
        }
    } else {
        $response['message'] = "Please fill in all required fields.";
    }
} else {
    $response['message'] = "Invalid request method.";
}

echo json_encode($response);
?>
