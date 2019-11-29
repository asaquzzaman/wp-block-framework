/**
 * Webpack Configuration
 */

const paths                = require( './paths' );
const defaultConfig        = require("@wordpress/scripts/config/webpack.config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin    = require('filemanager-webpack-plugin');
const glob                 = require("glob");

 
const entryPoint = {};
 

//./src/**/*(editor.scss|common.scss)
// options is optional
const editorScss = glob.sync("./src/**/*(editor.scss)")
	.reduce(function(acc, path) {

		acc.push(path);

		return acc;
	}, [])

const commonScss = glob.sync("./src/**/*(common.scss)")
	.reduce(function(acc, path) {

		acc.push(path);

		return acc;
	}, []) 

// options is optional
const styleScss = glob.sync("./src/**/*style.scss")
	.reduce(function(acc, path) {
		acc.push(path);

		return acc;
	}, []) 

entryPoint['./dist/common'] = commonScss;
entryPoint['./dist/style']  = styleScss;
entryPoint['./dist/editor'] = editorScss;
entryPoint['./dist/blocks'] = paths.pluginBlocksJs;

// Export configuration.
const Modules = {
	...defaultConfig,
	mode: 'development',
	entry: entryPoint,
	// entry: {
	// 	'./dist/blocks': paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
	// 	'./dist': ['./src/blocks/tutorial/styles/editor.scss', './src/blocks/tutorial/styles/style.scss']
	// 	//'./src/test/foo': path.resolve(__dirname, '../../src/foo.css'),
	// 	//'./src/test/bar': path.resolve(__dirname, '../../src/bar.css'),
	// },

	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// The dist folder.
		path: paths.pluginRoot,
		filename: '[name].js'
	},


	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			}
		
		],
	},
	// Add plugins.
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].css'
	    }),
	    new FileManagerPlugin({
			onEnd: [{
				delete: [
					"./dist/*.map",
					"./dist/*(editor.asset.php|style.asset.php|style.js|editor.js|common.asset.php|common.js)"
				]
			}]
		})
	]
};

module.exports = [Modules];
