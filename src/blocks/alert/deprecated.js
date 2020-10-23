/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { attributes } from './block.json';

const deprecated =  [
    {
        attributes,

        save( { attributes } ) {
           
        },
    }
]

export default deprecated;
