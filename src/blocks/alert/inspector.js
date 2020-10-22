
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { RangeControl, PanelBody } from '@wordpress/components';
import { InspectorControls, ContrastChecker, PanelColorSettings } from '@wordpress/block-editor';



/**
 * Inspector controls
 */
class Inspector extends Component {
	
	render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
			textAlign,
			title,
			value,
			fontSize
		} = attributes;
		
		const changeBackground = (color) => {
			setAttributes({ backgroundColor: color})
		}
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody	
						title={ __( "Development Tools", 'frontrom' ) } 
						initialOpen={ false }
					>
					    <RangeControl
					        label={ __( 'Font Size', 'frontrom' ) }
					        value={ parseInt(fontSize) }
					        onChange={ ( fontSize ) => setAttributes( { fontSize } ) }
					        min={ 1 }
					        step={ 1 }
					        max={ 50 }
					    />
					
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
	
}

export default Inspector;
