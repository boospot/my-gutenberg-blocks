<?php

namespace MyGutenbergBlocks;
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://booskills.com/rao
 * @since      1.0.0
 *
 * @package    MyGutenbergBlocks
 * @subpackage MyGutenbergBlocks/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MyGutenbergBlocks
 * @subpackage MyGutenbergBlocks/public
 * @author     Rao <rao@booskills.com>
 */
class Front {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $plugin_name The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $version The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @param string $plugin_name The name of the plugin.
	 * @param string $version The version of this plugin.
	 *
	 * @since    1.0.0
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in MyGutenbergBlocks\Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The MyGutenbergBlocks\Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		wp_enqueue_style( 'ui-kit', trailingslashit( MY_GUTENBERG_BLOCKS_URL_PATH ) . 'public/css/uikit.min.css', array(), '3.6.16', 'all' );

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in MyGutenbergBlocks\Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The MyGutenbergBlocks\Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		wp_enqueue_script( 'ui-kit', trailingslashit( MY_GUTENBERG_BLOCKS_URL_PATH ) . 'public/js/uikit.min.js', array(), '3.6.16', true );

		// Ui-Kit Icons https://getuikit.com/docs/installation
		wp_enqueue_script( 'ui-kit-icons', trailingslashit( MY_GUTENBERG_BLOCKS_URL_PATH ) . 'public/js/uikit-icons.min.js', array(), '3.6.16', true );

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/public.js', array( 'jquery' ), $this->version, false );

	}

}
