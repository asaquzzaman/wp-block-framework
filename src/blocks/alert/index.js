/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Alert', 'tutorial' ),
	description: __( 'Provide contextual feedback messages or notices.', 'tutorial' ),
	keywords: [ 'tutorial', 'notice', 'message' ],
	styles: [
		{
			name: 'info',
			label: __( 'Info', 'tutorial' ),
			isDefault: true,
		},
		{
			name: 'success',
			label: __( 'Success', 'tutorial' )
		},
		{
			name: 'warning',
			label: __( 'Warning', 'tutorial' )
		},
		{
			name: 'error',
			label: __( 'Error', 'tutorial' )
		},
	],
	supports: {
		align: true,
		alignWide: true,
		alignFull: true,
	},
	example: {
		attributes: {
			title: __( 'This is gutenberg block an alert', 'tutorial' ),
			value: __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 'tutorial' ),
		},
	},
	icon: <Icon icon={ icon } />,
	attributes,
	transforms,
	edit,
	save,
	deprecated,
};

export { name, category, settings };
