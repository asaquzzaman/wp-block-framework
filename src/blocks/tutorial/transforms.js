/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

import metadata from './block.json';

const transforms = {
	from: [
        // {
        //     type: 'block',
        //     blocks: [ 'core/paragraph' ],
        //     transform: ( { content } ) => {
        //         console.log('from', content);
        //         return createBlock( metadata.name, { value: content } );
        //     },
        // },

        // {
        //     type: 'block',
        //     blocks: [ 'core/heading' ],
        //     transform: ( { content } ) => {
        //         return createBlock( metadata.name, { value: content } );
        //     },
        // },
        // {
        //     type: 'prefix',
        //     prefix: 'tutorial',
        //     transform: function( content ) {
        //         return createBlock( 'tutorial/tutorial', {
        //             content,
        //         } );
        //     },
        // },

        {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: 'tutorial',
            attributes: {
                // An attribute can be source from a tag attribute in the shortcode content
                id: {
                    type: 'number',
                    default: 10
                },
                heading: {
                    type: 'string',
                    default: 'h3'
                },
                // An attribute can be source from the shortcode attributes
                align: {
                    type: 'string',
                    shortcode: function( attributes ) {
                        //console.log(attributes);
                        var align = attributes.named.heading ? attributes.named.heading : 'h3';
                        return align.replace( 'heading', '' );
                    },
                },
            }
        },
        {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: 'caption',
            attributes: {
                // An attribute can be source from a tag attribute in the shortcode content
                url: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'src',
                    selector: 'img',
                },
                // An attribute can be source from the shortcode attributes
                align: {
                    type: 'string',
                    shortcode: ( { named: { align = 'alignnone' } } ) => {
                        console.log('alskdjfhasdkj')
                        return align.replace( 'align', '' );
                    },
                },
            },
        },
    ],

    to: [
        // {
        //     type: 'block',
        //     blocks: [ 'core/heading' ],
        //     transform: ( { value, title } ) => {
        //         title = 'askhfalkjshdaksj';
        //         value = 'slerhgakljzsd';
        //         if ( title ) {
        //             value = title + '<br />' + value;
        //         }

        //         if ( ! value || ! value.length ) {
        //             return createBlock( 'core/heading' );
        //         }
        //         // transforming an alert element with content
        //         return createBlock( 'core/heading', {
        //             content: value,
        //         } );
        //     },
        // },
        // {
        //     type: 'block',
        //     blocks: [ 'core/paragraph' ],
        //     transform: ( { value, title } ) => {
        //         console.log('to', value, title);
        //         if ( title ) {
        //             value = title + '<br />' + value;
        //         }

        //         if ( ! value || ! value.length ) {
        //             return createBlock( 'core/paragraph' );
        //         }
        //         // transforming an alert element with content
        //         return createBlock( 'core/paragraph', {
        //             content: value,
        //         } );
        //     },
        // }
    ],
};

export default transforms;
