/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Block edit function
 */
const edit = ( props ) => {

	const {
			attributes,
			className,
			isSelected,
			setAttributes,
			textColor,
		} = props;

		const {
			textAlign,
			title,
			value,
			backgroundColor
		} = attributes;
	
	return (
		
		<Fragment>

			{ isSelected && (
					<Inspector
						{ 
							...props
						}
					/>
				) }
			
			<div 
				className={ className + ' my-custom-class' }
				style={{
					backgroundColor: backgroundColor + ' !important'
				}}
			>

				<RichText
					/* translators: placeholder text for input box */
					placeholder={ __( 'Write text…', 'tutorial' ) }
					value={ value }
					className="wp-block-tutorial-alert__text"
					onChange={ ( value ) => setAttributes( { value: value } ) }
					keepPlaceholderOnFocus
				/>
			</div>
		</Fragment>	
	);
}


export default edit;
