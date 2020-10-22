/**
 * Internal dependency
 */
import './utils/block-category';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';



// Register Block
import * as tutorial from './blocks/tutorial';
import * as alert from './blocks/alert';


/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, category, settings } = block;

	registerBlockType( name, {
		category: category,
		...settings,
	} );
};

/**
 * Function to register blocks.
 */
const registerTutorialBlocks = () => {
	[
		tutorial,
		alert

	].forEach( registerBlock );
};

registerTutorialBlocks();
