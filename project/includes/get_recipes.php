<?php
require_once 'db.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("SELECT * FROM recipes ORDER BY created_at DESC");
    $recipes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Format recipes to match the frontend expectations
    $formattedRecipes = array_map(function($r) {
        return [
            'id' => (int)$r['id'],
            'title' => $r['title'],
            'category' => $r['category'],
            'image' => $r['image_url'] ?: 'https://via.placeholder.com/300x200?text=No+Image',
            'ingredients' => explode("\n", str_replace("\r", "", $r['ingredients'])),
            'instructions' => $r['instructions'],
            'from_db' => true
        ];
    }, $recipes);

    echo json_encode($formattedRecipes);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
