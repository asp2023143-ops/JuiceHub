<?php
require_once 'db.php';

echo "Testing DB...\n";

$email = "testrunner@test.com";
$pass = "password123";

// Delete if exists
$pdo->exec("DELETE FROM users WHERE email = '$email'");

// Register
$hashed = password_hash($pass, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES ('runner', ?, ?)");
$stmt->execute([$email, $hashed]);
echo "Registered...\n";

// Login
$stmt2 = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt2->execute([$email]);
$user = $stmt2->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo "User found. Hash in DB: " . $user['password'] . "\n";
    if (password_verify($pass, $user['password'])) {
        echo "Login SUCCESSFUL!\n";
    } else {
        echo "Login FAILED: Password verify failed.\n";
    }
} else {
    echo "User not found!\n";
}

// Fetch all users
$stmt3 = $pdo->query("SELECT email, password FROM users");
while($row = $stmt3->fetch(PDO::FETCH_ASSOC)) {
    echo "DB User: " . $row['email'] . "\n";
}
?>
