/**
 * WordPress dependencies
 */
import { getCategories, setCategories } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import brandAssets from './brand-assets';

setCategories( [
	{
		slug: 'tutorial',
		title: 'Tutorial',
		icon: brandAssets.categoryIcon,
	},

	...getCategories().filter( ( { slug } ) => slug !== 'coblocks-galleries' ),
] );
