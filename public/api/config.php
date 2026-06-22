<?php

declare(strict_types=1);

return [
    'contact_destination' => 'administracion@cushuro.pe',

    'email_from' => 'noreply@cushuro.pe',
    'email_from_name' => 'Formulario Web Cushuro',

    'recaptcha_secret_key' => getenv('RECAPTCHA_SECRET_KEY'),
    'recaptcha_site_key' => getenv('RECAPTCHA_SITE_KEY'),
    'recaptcha_expected_action' => 'submit',
    'recaptcha_min_score' => 0.5,

    'allowed_origins' => [
        'https://cushuro.pe',
        'https://www.cushuro.pe',
        'https://kenifa.sg-host.com',
        'https://www.zincelideas.com',
        'https://zincelideas.com',
    ],

    'rate_limit_window_ms' => 300000,
    'rate_limit_max_requests' => 10,
    'redirect_to' => '/formulario',
];
