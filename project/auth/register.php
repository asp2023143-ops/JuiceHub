<?php
session_start();
require_once '../includes/db.php';

header('Content-Type: application/json');
$response = ['success' => false, 'message' => ''];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $user = trim($_POST['username'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $pass = $_POST['password'] ?? '';

    if (!empty($user) && !empty($email) && !empty($pass)) {
        try {
            // Check if email or username already exists
            $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
            $stmt->execute([$email, $user]);
            if ($stmt->rowCount() > 0) {
                $response['message'] = "This username or email is already registered.";
            } else {
                // Insert new user
                $hashed_password = password_hash($pass, PASSWORD_DEFAULT);
                $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
                $stmt->execute([$user, $email, $hashed_password]);
                $response['success'] = true;
                $response['message'] = "Registration successful! You can now login.";
            }
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
