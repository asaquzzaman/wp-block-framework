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
	/* translators: block description */
	description: __( 'Add a structured wrapper for column blocks, then add content blocks you’d like to the columns.', 'coblocks' ),
	icon,
	keywords: [
		'coblocks',
		/* translators: block keyword */
		__( 'rows', 'coblocks' ),
		/* translators: block keyword */
		__( 'columns', 'coblocks' ),
		/* translators: block keyword */
		__( 'layouts', 'coblocks' ),
	],

	attributes,
	transforms,
	edit,
	save,
	deprecated,
};

export { name, category, metadata, settings };
