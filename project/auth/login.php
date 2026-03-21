<?php
session_start();
require_once '../includes/db.php';

header('Content-Type: application/json');
$response = ['success' => false, 'message' => ''];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = trim($_POST['email'] ?? '');
    $pass = $_POST['password'] ?? '';

    if (!empty($email) && !empty($pass)) {
        try {
            // Fetch user by email
            $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verify password using password_verify ONLY (secure)
            if ($user && password_verify($pass, $user['password'])) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $response['success'] = true;
                $response['message'] = "Login successful! Welcome back, " . htmlspecialchars($user['username']) . ".";
                $response['username'] = $user['username'];
            } else {
                $response['message'] = "Invalid email or password.";
            }
        } catch (PDOException $e) {
            $response['message'] = "Database error: " . $e->getMessage();
        }
    } else {
        $response['message'] = "Please provide both email and password.";
    }
} else {
    $response['message'] = "Invalid request method.";
}

echo json_encode($response);
?>
