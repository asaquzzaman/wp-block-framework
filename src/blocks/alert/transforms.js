/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( { content } ) => {
				return createBlock( metadata.name, { value: content } );
			},
		},

		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { content } ) => {
				return createBlock( metadata.name, { value: content } );
			},
		}
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( { value, title } ) => {
				

				if ( ! value || ! value.length ) {
					return createBlock( 'core/heading' );
				}
				// transforming an alert element with content
				return createBlock( 'core/heading', {
					content: value,
				} );
			},
		},

		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { value, title } ) => {
				

				if ( ! value || ! value.length ) {
					return createBlock( 'core/paragraph' );
				}
				// transforming an alert element with content
				return createBlock( 'core/paragraph', {
					content: value,
				} );
			},
		},
	],
};

export default transforms;
