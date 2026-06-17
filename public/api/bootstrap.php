<?php

require __DIR__ . '/bootstrap.php';

$config = cushuro_get_config();
$origin = cushuro_get_origin();

// SOLO para prueba: no validamos todo el formulario
$token = $_POST['recaptcha_token'] ?? '';

if (!$token) {
    cushuro_json_response(400, ['error' => 'No hay token'], $origin, $config);
}

// 👉 AQUÍ usamos tu función real
$result = cushuro_verify_recaptcha($token, $origin, $config);

// 👇 MOSTRAMOS RESPUESTA DE GOOGLE
cushuro_json_response(200, [
    'ok' => true,
    'recaptcha' => $result
], $origin, $config);