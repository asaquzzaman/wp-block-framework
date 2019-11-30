
//title, styles, description, icon, keywords, attributes, transforms, edit, save, deprecated, supports, Example

/**
 * Internal dependencies
 */
import edit from './edit';
import deprecated from './deprecated';
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
const { name, category } = metadata;

const attributes = {
	...metadata.attributes,
};

const settings = {
	/* translators: block name */
	title: __( 'Tutorial', 'tutorial' ),
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
	/* translators: block description */
	description: __( 'Add a structured wrapper for column blocks, then add content blocks you’d like to the columns.', 'coblocks' ),
	icon,
	keywords: [
		'tutorial',
		/* translators: block keyword */
		__( 'tutorial', 'tutorial' ),
		/* translators: block keyword */
		__( 'learning', 'tutorial' ),
		/* translators: block keyword */
		__( 'knowledge', 'tutorial' ),
	],

	attributes,
	transforms,
	edit,
	save,
	deprecated,
};

export { name, category, metadata, settings };
