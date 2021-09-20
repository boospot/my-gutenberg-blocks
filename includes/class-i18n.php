<?php
namespace MyGutenbergBlocks;
/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://booskills.com/rao
 * @since      1.0.0
 *
 * @package    MyGutenbergBlocks
 * @subpackage MyGutenbergBlocks/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    MyGutenbergBlocks
 * @subpackage MyGutenbergBlocks/includes
 * @author     Rao <rao@booskills.com>
 */
class i18N {
	/** @noinspection SpellCheckingInspection */


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'my-gutenberg-blocks',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}


}
