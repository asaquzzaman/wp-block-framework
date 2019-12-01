// module.exports = {
// 	rootDir: '../../../',
// 	testMatch: ['**/test/save.test.js'],
// 	testPathIgnorePatterns: ['/.git/', '/node_modules/', '<rootDir>/build/'],
// 	//setupFiles: [ '<rootDir>/.dev/tests/jest/setup-globals.js' ],
// 	// moduleNameMapper: {
// 	// 	'\\.(scss|css|less)$': '<rootDir>/.dev/tests/jest/styleMock.js',
// 	// },
// 	reporters: [ 'default' ],
// 	testEnvironment: 'jsdom',
// 	automock: true,
// }
const glob = require( 'glob' ).sync;

// Finds all packages which are transpiled with Babel to force Jest to use their source code.
const transpiledPackageNames = glob( 'packages/*/src/index.js' )
	.map( ( fileName ) => fileName.split( '/' )[ 1 ] );

module.exports = {
	...require( '@wordpress/scripts/config/jest-e2e.config' ),
	rootDir: '../../../',
	moduleNameMapper: {
		[ `@wordpress\\/(${ transpiledPackageNames.join( '|' ) })$` ]: 'packages/$1/src',
	},
	testMatch: [
		'**/test/save.test.js',
	],
	preset: '@wordpress/jest-preset-default',
	setupFiles: [
		'<rootDir>/.dev/tests/jest/setup-globals.js',
	],
	setupFilesAfterEnv: [
		'@wordpress/jest-console',
		'@wordpress/jest-puppeteer-axe',
		'expect-puppeteer',
	],
	transformIgnorePatterns: [
		'node_modules',
		'scripts/config/puppeteer.config.js',
	],
	reporters: [
		'default'
	],
	"modulePaths": [
	    "<rootDir>/node_modules"
	 ],
	moduleDirectories: [ 'node_modules', 'src' ],
	transform: {
		'^.+\\.[jt]sx?$': '<rootDir>/.dev/tests/jest/babel-transformer.js',
	},
};