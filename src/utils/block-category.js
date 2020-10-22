/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { setCategories } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

setCategories( [
	{
		slug: 'tutorial',
		title: __( 'Tutorial', 'tutorial' ),
		icon: <Icon icon={ 'wordpress' } />
	}

] );
