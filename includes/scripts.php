<?php
/**
 * Load general WP action hook
 *
 */

namespace Tutorial\Includes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general WP action hook
 */
class Scripts {


	/**
	 * This plugin's instance.
	 *
	 * @var CoBlocks_Accordion_IE_Support
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function instance() {
		 if ( !self::$instance ) {
            self::$instance = new self();
        }

        return self::$instance;
	}

	/**
	 * The Constructor.
	 */
	public function __construct() {
		//add_action( 'the_post', array( $this, 'load_assets' ) );
	}
}
