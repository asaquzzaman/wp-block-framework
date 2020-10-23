<?php
/**
 * Load general WP action hook
 *
 */

namespace Tutorial\Includes;

use Exception;
use WP_REST_Server;

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
		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	/**
     * Resgister routes
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function register_routes() {

        register_rest_route(
            'tutorial/v1',
            '/posts/',
            [
                [
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_posts' ],
                    'permission_callback' => [ $this, 'permission_check' ],
                ]
            ]
        );
    }

    public function permission_check() {
        return true;
    }

    public function get_posts( $request ) {
        $numberposts = $request->get_param( 'numberposts' );

    	return get_posts([ 'numberposts' => $numberposts ]);
    }
}
