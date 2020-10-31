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
		add_action( 'enqueue_block_assets', [ $this, 'block_assets' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'block_editor_assets' ] );
	}

	/**
	 * Block assets.
	 */
	public function block_assets() {
		$dependencies = require_once( TUTORIAL_DIST_PATH . '/blocks.asset.php' );

		wp_enqueue_script(
		    'tutorial-block',
		    TUTORIAL_DIST_URL . '/blocks.js',
		    $dependencies['dependencies'],
		    $dependencies['version'],
		    true
		);

		wp_enqueue_style(
		    'tutorial-block-style',
		    TUTORIAL_DIST_URL . '/style.css',
		    false,
		    time(),
		    'all'
		);
	}
	/**
	 * Block editor assets.
	 */
	public function block_editor_assets() {
		wp_enqueue_style( 'tutorial-block-editor-style', TUTORIAL_DIST_URL . '/editor.css', false, time(), 'all' );
	}
}
