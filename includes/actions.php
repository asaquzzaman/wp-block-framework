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
class Actions {


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
		add_shortcode('tutorial_post_title', [$this, 'caldera_learn_basic_blocks_post_title_shortcode_handler']);
	}

	public function caldera_learn_basic_blocks_post_title_shortcode_handler($atts) {
		$atts = shortcode_atts([
			'id' => 10,
			'heading' => 'h3',
		], $atts, 'tutorial_post_title');

		return $this->caldera_learn_basic_blocks_post_title($atts[ 'id' ], $atts[ 'heading' ]);
	}

	function caldera_learn_basic_blocks_post_title($post_id, $heading) {
		if (!in_array($heading, ['h2', 'h3', 'h4'])) {
			$heading = 'h2';
		}
		$title = get_the_title(absint($post_id));
		return "<$heading>$title</$heading>";
	}
}
