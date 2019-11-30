/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { BlockIcon, InnerBlocks } from '@wordpress/block-editor';
import { ButtonGroup, Button, IconButton, Tooltip, Placeholder, Spinner } from '@wordpress/components';
import { isBlobURL } from '@wordpress/blob';


/**
 * Block edit function
 */
const editor = (attrs) => {
	
	return (
		
		<div>This is my first WP block</div>
	)
	
}

export default  editor;
