
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, ContrastChecker, PanelColorSettings } from '@wordpress/block-editor';



/**
 * Inspector controls
 */
class Inspector extends Component {
	
	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			textAlign,
			title,
			value,
			backgroundColor
		} = attributes;
		
		const changeBackground = (color) => {
			setAttributes({ backgroundColor: color})
		}
		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings', 'coblocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: backgroundColor,
								onChange: changeBackground,
								label: __( 'Background Color', 'coblocks' ),
							},
						
						] }
					>
						
					</PanelColorSettings>
				</InspectorControls>
			</Fragment>
		);
	}
	
}

export default Inspector;
