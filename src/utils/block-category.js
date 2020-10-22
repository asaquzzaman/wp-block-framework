/**
 * Internal dependencies
 */
import brandAssets from './brand-assets';

/**
 * WordPress dependencies
 */
import { setCategories } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

setCategories( [
	{
		slug: 'tutorial',
		title: __( 'Tutorial', 'tutorial' ),
		icon: brandAssets.categoryIcon
	}

] );
