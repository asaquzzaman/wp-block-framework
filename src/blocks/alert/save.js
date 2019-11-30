/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText, getColorClassName } from '@wordpress/block-editor';

const save = ( { attributes } ) => {

	const {
			textAlign,
			title,
			value,
		} = attributes;

	return (
		<div>
			
			<RichText.Content
				tagName="p"
				className="wp-block-coblocks-alert__text"
				value={ value }
			/>
		
		</div>
	);
};

export default save;
