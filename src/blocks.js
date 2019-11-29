/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import './utils/block-category';


// Register Blocks
import * as tutorial from './blocks/tutorial';


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
 * Function to register blocks provided by CoBlocks.
 */
export const registerTutorialBlocks = () => {
	[
		tutorial

	].forEach( registerBlock );
};

registerTutorialBlocks();
