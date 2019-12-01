//title, styles, description, icon, keywords, attributes, transforms, edit, save, deprecated, supports, example, inspector
/**
 * Styles.
 */
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

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Alert', 'coblocks' ),
	/* translators: block description */
	description: __( 'Provide contextual feedback messages or notices.', 'coblocks' ),
	icon,
	keywords: [
		'tutorial',
		/* translators: block keyword */
		__( 'notice', 'coblocks' ),
		/* translators: block keyword */
		__( 'message', 'coblocks' ),
	],
	styles: [
		{
			name: 'info',
			/* translators: block style */
			label: __( 'Info', 'coblocks' ),
			isDefault: true,
		},
		{
			name: 'success',
			/* translators: block style */
			label: __( 'Success', 'coblocks' ),
		},
		{
			name: 'warning',
			/* translators: block style */
			label: __( 'Warning', 'coblocks' ),
		},
		{
			name: 'error',
			/* translators: block style */
			label: __( 'Error', 'coblocks' ),
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
	attributes,
	transforms,
	edit,
	save,
	deprecated,
};

export { name, category, metadata, settings, attributes };
