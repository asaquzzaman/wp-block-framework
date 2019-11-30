/**
 * WordPress dependencies
 */
import { RichText, getColorClassName } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { attributes } from './block.json';

const deprecated =  [
    {
        attributes,

        save( { attributes } ) {
            const {
				textAlign,
				title,
				value,
				backgroundColor
			} = attributes;
			
			return (
				<div 
					style={ {
						backgroundColor: backgroundColor
					} }
				>
					
					<RichText.Content
						tagName="p"
						className="wp-block-coblocks-alert__text"
						value={ value }
					/>
				
				</div>
			);
        },
    }
]

export default deprecated;
