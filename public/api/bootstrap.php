<?php

declare(strict_types=1);

// ─── Config ──────────────────────────────────────────────────────────────────

function cushuro_get_config(): array
{
    static $config = null;
    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }
    return $config;
}

// ─── Origin / CORS ───────────────────────────────────────────────────────────

function cushuro_get_origin(): string
{
    return $_SERVER['HTTP_ORIGIN'] ?? '';
}

function cushuro_is_allowed_origin(string $origin, array $config): bool
{
    if ($origin === '') return true;
    return in_array($origin, (array) ($config['allowed_origins'] ?? []), true);
}

function cushuro_cors_headers(string $origin, array $config): void
{
    if ($origin !== '' && cushuro_is_allowed_origin($origin, $config)) {
        header("Access-Control-Allow-Origin: {$origin}");
    }
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
    header('Access-Control-Max-Age: 86400');
    header('Vary: Origin');
}

function cushuro_handle_preflight(array $config): void
{
    $origin = cushuro_get_origin();
    cushuro_cors_headers($origin, $config);
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function cushuro_ensure_allowed_origin(array $config): string
{
    $origin = cushuro_get_origin();
    cushuro_cors_headers($origin, $config);
    if ($origin !== '' && !cushuro_is_allowed_origin($origin, $config)) {
        cushuro_json_response(403, ['message' => 'Origin no permitido.'], $origin, $config);
    }
    return $origin;
}

// ─── Method guard ─────────────────────────────────────────────────────────────

function cushuro_require_method(string $method, string $origin, array $config): void
{
    if ($_SERVER['REQUEST_METHOD'] !== strtoupper($method)) {
        cushuro_json_response(405, ['message' => 'Metodo no permitido.'], $origin, $config);
    }
}

// ─── Rate limiting (file-based, per-IP) ──────────────────────────────────────

function cushuro_rate_limit(string $key, string $origin, array $config): void
{
    $windowMs = (int) ($config['rate_limit_window_ms']    ?? 60000);
    $maxReqs  = (int) ($config['rate_limit_max_requests'] ?? 5);
    $ip       = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $safeKey  = preg_replace('/[^a-zA-Z0-9_\-]/', '_', $key);
    $file     = sys_get_temp_dir() . "/cushuro_rl_{$safeKey}_{$ip}.json";

    $now   = (int) (microtime(true) * 1000);
    $state = ['count' => 0, 'start' => $now];

    if (file_exists($file)) {
        $raw = @file_get_contents($file);
        if ($raw !== false) {
            $decoded = json_decode($raw, true);
            if (is_array($decoded) && ($now - (int) $decoded['start']) < $windowMs) {
                $state = $decoded;
            }
        }
    }

    $state['count']++;
    @file_put_contents($file, json_encode($state), LOCK_EX);

    if ($state['count'] > $maxReqs) {
        cushuro_json_response(429, ['message' => 'Demasiadas solicitudes. Intente mas tarde.'], $origin, $config);
    }
}

// ─── Logging ─────────────────────────────────────────────────────────────────

function cushuro_log(string $event, mixed $data = null): void
{
    // No-op en produccion
}

// ─── Request payload ─────────────────────────────────────────────────────────

function cushuro_get_request_payload(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') return [];
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

// ─── Validation ──────────────────────────────────────────────────────────────

function _cushuro_line(string $v): string
{
    return trim(preg_replace('/\s+/', ' ', preg_replace('/[\x00-\x1f\x7f]/', ' ', $v)));
}

function _cushuro_multi(string $v): string
{
    $v = preg_replace('/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/', '', $v);
    return trim(str_replace("\r\n", "\n", $v));
}

function cushuro_validate_form_payload(array $payload): array
{
    $errors = [];
    $data   = [];

    $nombre = _cushuro_line((string) ($payload['Nombre'] ?? ''));
    if (strlen($nombre) < 2)   $errors[] = ['field' => 'Nombre',  'message' => 'El nombre es muy corto'];
    if (strlen($nombre) > 120) $errors[] = ['field' => 'Nombre',  'message' => 'El nombre es muy largo'];
    $data['Nombre'] = $nombre;

    $empresa = _cushuro_line((string) ($payload['Empresa'] ?? ''));
    if (strlen($empresa) < 2)   $errors[] = ['field' => 'Empresa', 'message' => 'La empresa es obligatoria'];
    if (strlen($empresa) > 160) $errors[] = ['field' => 'Empresa', 'message' => 'La empresa es muy larga'];
    $data['Empresa'] = $empresa;

    $correo = strtolower(_cushuro_line((string) ($payload['Correo'] ?? '')));
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) $errors[] = ['field' => 'Correo', 'message' => 'Correo invalido'];
    if (strlen($correo) > 160) $errors[] = ['field' => 'Correo', 'message' => 'Correo demasiado largo'];
    $data['Correo'] = $correo;

    $telefono = _cushuro_line((string) ($payload['Telefono'] ?? ''));
    if (strlen($telefono) < 7)  $errors[] = ['field' => 'Telefono', 'message' => 'El telefono es muy corto'];
    if (strlen($telefono) > 30) $errors[] = ['field' => 'Telefono', 'message' => 'El telefono es muy largo'];
    if (!preg_match('/^[0-9+()\-\s.]+$/', $telefono)) $errors[] = ['field' => 'Telefono', 'message' => 'Telefono invalido'];
    $data['Telefono'] = $telefono;

    $producto = _cushuro_line((string) ($payload['Producto'] ?? $payload['Servicio'] ?? ''));
    if (strlen($producto) < 2) $errors[] = ['field' => 'Producto', 'message' => 'El producto es obligatorio'];
    $data['Producto'] = $producto;

    $mensaje = _cushuro_multi((string) ($payload['Mensaje'] ?? ''));
    if (strlen($mensaje) < 10)   $errors[] = ['field' => 'Mensaje', 'message' => 'El mensaje es muy corto'];
    if (strlen($mensaje) > 3000) $errors[] = ['field' => 'Mensaje', 'message' => 'El mensaje es muy largo'];
    $data['Mensaje'] = $mensaje;

    $token = _cushuro_line((string) ($payload['recaptcha_token'] ?? ''));
    if (strlen($token) < 10)   $errors[] = ['field' => 'recaptcha_token', 'message' => 'Token de reCAPTCHA faltante'];
    if (strlen($token) > 4096) $errors[] = ['field' => 'recaptcha_token', 'message' => 'Token de reCAPTCHA invalido'];
    $data['recaptcha_token'] = $token;

    if (!empty($payload['website'])) {
        $errors[] = ['field' => 'website', 'message' => 'Actividad sospechosa detectada'];
    }

    return ['errors' => $errors, 'data' => $data];
}

// ─── reCAPTCHA v3 ────────────────────────────────────────────────────────────

function cushuro_verify_recaptcha(string $token, string $origin, array $config): array
{
    $secret   = (string) ($config['recaptcha_secret_key']      ?? '');
    $action   = (string) ($config['recaptcha_expected_action'] ?? 'submit');
    $minScore = (float)  ($config['recaptcha_min_score']       ?? 0.5);

    if ($secret === '') {
        cushuro_json_response(500, ['message' => 'RECAPTCHA_SECRET_KEY no esta configurado en el servidor.'], $origin, $config);
    }

    $ctx = stream_context_create([
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query(['secret' => $secret, 'response' => $token]),
            'timeout' => 10,
        ],
    ]);

    $raw = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $ctx);
    if ($raw === false) {
        cushuro_json_response(502, ['message' => 'No se pudo verificar reCAPTCHA.'], $origin, $config);
    }

    $result    = json_decode($raw, true) ?? [];
    $success   = (bool) ($result['success'] ?? false);
    $score     = isset($result['score']) ? (float) $result['score'] : null;
    $resAction = (string) ($result['action'] ?? '');

    $actionOk = !$action || !$resAction || $resAction === $action;
    $scoreOk  = $score === null || $score >= $minScore;

    if (!$success || !$actionOk || !$scoreOk) {
        cushuro_json_response(400, [
            'errors' => [['field' => 'recaptcha_token', 'message' => 'Fallo la verificacion anti-spam. Intenta nuevamente.']],
        ], $origin, $config);
    }

    return $result;
}

// ─── Email ───────────────────────────────────────────────────────────────────

function cushuro_build_email(array $data, string $from, string $fromName): array
{
    $nombre   = $data['Nombre']   ?? '';
    $empresa  = $data['Empresa']  ?? '';
    $correo   = $data['Correo']   ?? '';
    $telefono = $data['Telefono'] ?? '';
    $producto = $data['Producto'] ?? '';
    $mensaje  = $data['Mensaje']  ?? '';

    $esc = fn(string $v) => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    $html = '<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">'
          . '<h2>Nueva consulta minera recibida</h2>'
          . '<table cellpadding="8" cellspacing="0" border="0">'
          . '<tr><td><strong>Nombre</strong></td><td>'   . $esc($nombre)   . '</td></tr>'
          . '<tr><td><strong>Empresa</strong></td><td>'  . $esc($empresa)  . '</td></tr>'
          . '<tr><td><strong>Correo</strong></td><td>'   . $esc($correo)   . '</td></tr>'
          . '<tr><td><strong>Teléfono</strong></td><td>' . $esc($telefono) . '</td></tr>'
          . '<tr><td><strong>Producto</strong></td><td>' . $esc($producto) . '</td></tr>'
          . '</table>'
          . '<div style="margin-top:20px"><strong>Mensaje</strong>'
          . '<p style="margin-top:8px">' . nl2br($esc($mensaje)) . '</p></div>'
          . '</div>';

    $text = "Nueva consulta minera recibida\n\n"
          . "Nombre: {$nombre}\nEmpresa: {$empresa}\nCorreo: {$correo}\n"
          . "Telefono: {$telefono}\nProducto: {$producto}\n\nMensaje:\n{$mensaje}";

    $boundary   = 'cushuro_' . bin2hex(random_bytes(8));
    $subjectEnc = '=?UTF-8?B?' . base64_encode("Nueva consulta minera - {$producto}") . '?=';
    $fromEnc    = '=?UTF-8?B?' . base64_encode($fromName) . '?=';

    $headers = "From: {$fromEnc} <{$from}>\r\n"
             . "Reply-To: {$correo}\r\n"
             . "MIME-Version: 1.0\r\n"
             . "Content-Type: multipart/alternative; boundary=\"{$boundary}\"";

    $body = "--{$boundary}\r\n"
          . "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n"
          . $text . "\r\n"
          . "--{$boundary}\r\n"
          . "Content-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n"
          . $html . "\r\n"
          . "--{$boundary}--";

    return compact('subjectEnc', 'headers', 'body', 'correo');
}

function cushuro_smtp_cmd($sock, string $cmd): string
{
    fwrite($sock, $cmd . "\r\n");
    $response = '';
    while ($line = fgets($sock, 512)) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') break;
    }
    return $response;
}

function cushuro_send_form_email(array $data, string $origin, array $config): void
{
    $to       = (string) ($config['contact_destination'] ?? '');
    $from     = (string) ($config['email_from']          ?? '');
    $fromName = (string) ($config['email_from_name']     ?? 'Formulario Web');
    $host     = (string) (getenv('EMAIL_HOST') ?: 'gtxm1332.siteground.biz');
    $port     = (int)    (getenv('EMAIL_PORT') ?: 465);
    $user     = (string) (getenv('EMAIL_USER') ?: $from);
    $pass     = (string) (getenv('EMAIL_PASS') ?: '');

    if ($to === '' || $from === '') {
        cushuro_json_response(500, ['message' => 'El correo del servidor no esta configurado.'], $origin, $config);
    }

    $email = cushuro_build_email($data, $from, $fromName);

    // ── SMTP con SSL (puerto 465) ────────────────────────────────────────────
    $smtpSent = false;
    if ($host !== '' && $user !== '' && $pass !== '' && $pass !== 'TU_CONTRASENA_AQUI') {
        $errno  = 0;
        $errstr = '';
        $sock   = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 15);

        if ($sock !== false) {
            stream_set_timeout($sock, 15);

            fgets($sock, 512); // banner
            cushuro_smtp_cmd($sock, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'cushuro.pe'));
            cushuro_smtp_cmd($sock, 'AUTH LOGIN');
            cushuro_smtp_cmd($sock, base64_encode($user));
            $authResp = cushuro_smtp_cmd($sock, base64_encode($pass));

            if (strpos($authResp, '235') !== false) {
                cushuro_smtp_cmd($sock, "MAIL FROM:<{$from}>");
                cushuro_smtp_cmd($sock, "RCPT TO:<{$to}>");
                cushuro_smtp_cmd($sock, 'DATA');
                fwrite($sock, "Subject: {$email['subjectEnc']}\r\n{$email['headers']}\r\n\r\n{$email['body']}\r\n.\r\n");
                fgets($sock, 512); // 250 OK
                cushuro_smtp_cmd($sock, 'QUIT');
                $smtpSent = true;
            }

            fclose($sock);
        }
    }

    if ($smtpSent) return;

    // ── Fallback: PHP mail() ─────────────────────────────────────────────────
    if (!@mail($to, $email['subjectEnc'], $email['body'], $email['headers'])) {
        cushuro_json_response(500, ['message' => 'No se pudo enviar el correo.'], $origin, $config);
    }
}

// ─── JSON response ────────────────────────────────────────────────────────────

function cushuro_json_response(int $status, array $data, string $origin, array $config): never
{
    if (ob_get_level() > 0) ob_end_clean();
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}
