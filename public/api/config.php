<?php

declare(strict_types=1);

return [
    'contact_destination' => 'contacto@zincelideas.com',

    // Si SiteGround rechaza este remitente por SPF/DMARC, cambia este valor
    // por una casilla creada dentro del dominio final alojado en SiteGround.
    'email_from' => 'contacto@zincelideas.com',
    'email_from_name' => 'Formulario Web',

    'recaptcha_site_key' => '6LfP0L8rAAAAAPpEytSVRORbhLu_RHUYJaA8vCRe',
    'recaptcha_secret_key' => '6LfP0L8rAAAAAB0aapY5ZiuMiDGGvVdjwyHq6Fc9',
    'recaptcha_expected_action' => 'submit',
    'recaptcha_min_score' => 0.5,

    'allowed_origins' => [
        'https://kenifa.sg-host.com',
        'https://www.zincelideas.com',
        'https://zincelideas.com',
    ],

    'rate_limit_window_ms' => 60000,
    'rate_limit_max_requests' => 5,
    'redirect_to' => '/formulario',
];
