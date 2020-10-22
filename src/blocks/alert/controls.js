/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { Toolbar, Dropdown, IconButton, Button, RangeControl } from '@wordpress/components';
import { select, dispatch, withSelect, withDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';



class Controls extends Component {
	constructor() {
		super( ...arguments );
	}

	render () {
		const {
            clientId,
            attributes,
            className,
            isSelected,
            setAttributes,
        } = this.props;


        const {
        	textAlign,
        } = attributes

        
		const toolbarControls = [

			{
				isActive: textAlign == 'left', 
				icon: 'align-left',
				title: __( 'Text align left', 'frontrom' ),
				onClick: () => { 
					setAttributes({ textAlign: 'left' });
				}
			},

			{
				isActive: textAlign == 'right',
				icon: 'align-right',
				title: __( 'Text align right', 'frontrom' ),
				onClick: () => { 
					setAttributes({ textAlign: 'right' });
				}
			},

			{
				isActive: textAlign == 'center',
				icon: 'align-center',
				title: __( 'Text align center', 'frontrom' ),
				onClick: () => { 
					setAttributes({ textAlign: 'center' });
				}
			},
		];

		return (
			
			<Fragment>
				<BlockControls>
					<Toolbar 
						isCollapsed={ true }
						icon='image-flip-vertical'
						controls={ toolbarControls } 
					/>

				</BlockControls>

			</Fragment>
		)
	}
}

export default Controls;


