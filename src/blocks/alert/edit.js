
/**
 * Internal dependencies
 */
import Controls from './controls';
import Inspector from './inspector';

/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose'


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
		value,
		fontSize,
		posts
	} = attributes;
	console.log(posts);
	return (
		
		<Fragment>

			{ isSelected && ( <Inspector { ...props } /> ) }
			{ isSelected && ( <Controls { ...props } /> ) }
			
			<div 
				className={ classnames( className, 'tutorial-alert' ) }
			>

				<RichText
					/* translators: placeholder text for input box */
					placeholder={ __( 'Write text…', 'tutorial' ) }
					value={ value }
					className="wp-block-tutorial-alert__text"
					onChange={ ( value ) => setAttributes( { value: value } ) }
					keepPlaceholderOnFocus
					style={{
						fontSize: `${fontSize}px`,
						textAlign: `${textAlign}`
					}}
				/>
			</div>
			
		</Fragment>	
	);
}


export default compose([
	withDispatch( ( dispatch, ownProps, registry ) => { 
		
		const kinds = select('core').getEntitiesByKind('tutorial');

		if ( !find( kinds, { name: 'tutorial' } ) ) {
			dispatch('core').addEntities([
				{
					name: 'post', 
					kind: 'tutorial', 
					baseURL: '/tutorial/v1/posts'
				}
			])
		}
	} ),
	withSelect( ( select, ownProps ) => {
		const { isResolving, hasFinishedResolution, getCachedResolvers } = select( 'core/data' );
		
	    return {
	    	posts: select('core').getEntityRecords( 'tutorial', 'post' ),
	    	isResolving: isResolving( 'core', 'getEntityRecords', [ 'tutorial', 'post' ] ),
		} 
	} )

])(Edit);
