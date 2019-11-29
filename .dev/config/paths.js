/**
 * Paths
 *
 * Project related paths.
 */

const path = require( 'path' );
const fs = require( 'fs' );

// Make sure any symlinks in the project folder are resolved:
const pluginDir = fs.realpathSync( process.cwd() );
const resolvePlugin = relativePath => path.resolve( pluginDir, relativePath );

// Config after eject: we're in ./config/
const paths = {
	pluginSrc: resolvePlugin( 'src' ), // Plugin src folder path.
	pluginBlocksJs: resolvePlugin( 'src/blocks.js' ),
	pluginDist: resolvePlugin( './dist' ),
	pluginBlocksStyle: resolvePlugin( './src/style.scss' ),
	pluginBlocksEditor: resolvePlugin( './src/editor.scss' ),
	pluginRoot: resolvePlugin( '.' ), // We are in ./dist folder already so the path '.' resolves to ./dist/.
};

module.exports = paths;