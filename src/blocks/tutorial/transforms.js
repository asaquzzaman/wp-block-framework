/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';



const transforms = {
	from: [
        {
            type: 'block',
            blocks: [ 'core/paragraph' ],
            transform: ( { content } ) => {
                return createBlock( 'core/heading', {
                    content,
                } );
            },
        },
    ]
};

export default transforms;
