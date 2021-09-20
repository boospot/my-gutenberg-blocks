<?php
/** @noinspection PhpUnused */

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://booskills.com/rao
 * @since             1.0.0
 * @package           MyGutenbergBlocks
 *
 * @wordpress-plugin
 * Plugin Name:       MyGutenbergBlocks
 * Plugin URI:        https://boospot.com/
 * Description:       This is a plugin to contain some example blocks to understand how blocks works
 * Requires PHP:      7.0
 * Requires at least: 5.0
 * Tested up to:      5.8
 * Version:           1.0.0
 * Author:            Rao
 * Author URI:        https://booskills.com/rao
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       my-gutenberg-blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'MY_GUTENBERG_BLOCKS_VERSION', '1.0.0' );

define( 'MY_GUTENBERG_BLOCKS_PLUGIN_NAME', 'my_gutenberg_blocks' );

/**
 * Plugin base name.
 * used to locate plugin resources primarily code files
 * Start at version 1.0.0
 */
/** @noinspection PhpUnused */
define( 'MY_GUTENBERG_BLOCKS_PLUGIN_BASE_NAME', basename( __FILE__ ) );


/**
 * Plugin base dir path.
 * used to locate plugin resources primarily code files
 * Start at version 1.0.0
 */
/** @noinspection PhpUnused */
define( 'MY_GUTENBERG_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );

/**
 * Plugin url to access its resources through browser
 * used to access assets images/css/js files
 * Start at version 1.0.0
 */
/** @noinspection PhpUnused */
define( 'MY_GUTENBERG_BLOCKS_URL_PATH', plugin_dir_url( __FILE__ ) );

/**
 * Composer Auto Loader
 */
if ( ! file_exists( plugin_dir_path( __FILE__ ) . 'vendor/autoload.php' ) ) {
	include_once ABSPATH . 'wp-admin/includes/plugin.php';
	deactivate_plugins( basename( __FILE__ ) );
	wp_die( esc_html__( 'Please run composer install before activating plugin.' ) );
}
require 'vendor/autoload.php';

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-mgb-activator.php
 */
function my_gutenberg_blocks_activate() {
	MyGutenbergBlocks\Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-mgb-deactivator.php
 */
function my_gutenberg_blocks_deactivate() {
	MyGutenbergBlocks\Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'my_gutenberg_blocks_activate' );
register_deactivation_hook( __FILE__, 'my_gutenberg_blocks_deactivate' );
/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function my_gutenberg_blocks() {

	return MyGutenbergBlocks\Init::get_instance();

}

my_gutenberg_blocks();