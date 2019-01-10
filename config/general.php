<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        'defaultWeekStartDay' => 1,
        'enableCsrfProtection' => true,
        'omitScriptNameInUrls' => true,
        'defaultCpLanguage' => 'en_GB',
        'cpTrigger' => 'admin',
        'securityKey' => getenv('SECURITY_KEY'),
        'elevatedSessionDuration' => 360000,
        'aliases' => [
            'basePath' => $_SERVER['DOCUMENT_ROOT'],
            'baseUrl' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']),
        ],
    ],

    // Dev environment settings
    'dev' => [
        'enableTemplateCaching' => false,
        'backupOnUpdate' => false,
        'devMode' => true,
        'siteUrl' => [
            'nl' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']) . '/nl/',
            'fr' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']) . '/fr/',
        ],
    ],

    // Staging environment settings
    'staging' => [
        'enableTemplateCaching' => false,
        'backupOnUpdate' => false,
        'siteUrl' => [
            'nl' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']) . '/nl/',
            'fr' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']) . '/fr/',
        ],
    ],

    // Production environment settings
    'production' => [
        'enableTemplateCaching' => true,
        'backupOnUpdate' => true,
        'siteUrl' => [
            'nl' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']) . '/nl',
            'fr' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']) . '/fr/',
        ],
    ],
];
