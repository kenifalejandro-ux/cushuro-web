<?php

// test_recaptcha.php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "Usa POST";
    exit;
}

$secret = "TU_SECRET_KEY"; // pon tu SECRET aquí

$token = $_POST['recaptcha_token'] ?? '';

if (!$token) {
    echo "No hay token";
    exit;
}

// Llamada a Google
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$token}");

$data = json_decode($response, true);

// Mostrar TODO
echo "<pre>";
print_r($data);
echo "</pre>";