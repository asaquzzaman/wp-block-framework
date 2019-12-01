/**
 * External dependencies
 */

import '@testing-library/jest-dom/extend-expect'
import { registerBlockType, createBlock, serialize } from '@wordpress/blocks'
import { name, settings } from '../index'

// Make variables accessible for all tests.
const mock = jest.fn();
let block;
let serializedBlock;

describe('console', () => {
  it('logs to the console', () => {

  })
})

// describe( name, () => {
// 	beforeAll( () => {
// 		// Register the block.
// 		registerBlockType( name, { category: 'common', ...settings } );
// 	} );

// 	beforeEach( () => {
// 		// Create the block with the minimum attributes.
// 		block = createBlock( name );

// 		// Reset the reused variables.
// 		serializedBlock = '';
// 	} );

// 	it( 'should render with content', () => {
// 		block.attributes.title = 'Alert title';
// 		block.attributes.value = 'Alert description';
// 		serializedBlock = serialize( block );
		
// 		expect( serializedBlock ).toBeDefined();
// 		expect( serializedBlock ).toContain( 'Alert title' );
// 		expect( serializedBlock ).toContain( 'Alert description' );
// 		expect( serializedBlock ).toMatchSnapshot();
// 	} );
// } );