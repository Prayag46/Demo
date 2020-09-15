<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'm3m' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ErIDbtb|~w~Sgvv#]omn3FJt]84kTCulI]-.&pd+h1JeU}u6()+by_7<#dy7=AE&' );
define( 'SECURE_AUTH_KEY',  '8$K</5ayVI:AqjPo^t1WP_|CjXPWU-5XEc<kJjy{UB3OH:_8azT(fo(?w)VLZH!8' );
define( 'LOGGED_IN_KEY',    '~UJvdN{VA?6Ug!0]^/kJ:M KnbArEw?:T.s{|D(W5%?A708my5[,EQcPTIua[Sq~' );
define( 'NONCE_KEY',        '7:>d*F#V:-N*42d0P5sn;L9P[XLI3sFW$_Vx<{>TzP4}2QqoNzvSMggQK;>R#WW>' );
define( 'AUTH_SALT',        'guwA^3p|8:N&T7,t7yi5m/~xujE]aFEHvmMz_qU9W:r<|$t8uzcBgQrP$(Qq@P(-' );
define( 'SECURE_AUTH_SALT', '%jKFX+WY%L}S;Y2_D/5C+.pWXc$ u)~;|Ojk=C3=wnc4vv3SO5~G4!w<Swla#u*g' );
define( 'LOGGED_IN_SALT',   '.N+==UZ<]Lnbb-BWMYL8L]WlRgIzkESwHcaB#*}2^42vuyOY1b<+DQTjK#S#vCmY' );
define( 'NONCE_SALT',       'vHIFsBN63ir3Fh_ZkwcuoRT<#$9A7_ O>(b0Pqop;ksN,qGfL-sb+<~Csl0=}!,/' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
