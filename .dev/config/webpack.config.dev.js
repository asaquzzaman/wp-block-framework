/**
 * Webpack Configuration
 */
const paths                = require( './paths' );
const defaultConfig        = require("@wordpress/scripts/config/webpack.config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin    = require('filemanager-webpack-plugin');
const glob                 = require("glob");
const entryPoint = {};
var mode = 'development';


// options is optional
const editorScss = glob.sync("./src/**/*(editor.scss)")
	.reduce(function(acc, path) {

		acc.push(path);

		return acc;
	}, [])

// options is optional
const styleScss = glob.sync("./src/**/*(style.scss)")
	.reduce(function(acc, path) {
		acc.push(path);

		return acc;
	}, [])

entryPoint['./dist/editor'] = editorScss;
entryPoint['./dist/style']  = styleScss;
entryPoint['./dist/blocks'] = paths.pluginBlocksJs;


// Export configuration.
const Modules = {
	...defaultConfig,
	mode: mode,
	entry: entryPoint,
	output: {
		pathinfo: true,
		chunkFilename: 'dist/[chunkhash].chunk-bundle.js',
        jsonpFunction: 'frontromWebpack',
		path: paths.pluginRoot,
		publicPath: '/',
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
			},

			{
		        test: /\.css$/i,
		        use: ['css-loader'],
		    },

			{
		        test: /\.html$/i,
		        loader: 'html-loader',
		    },

			{
		        test: /\.bundle\.js$/,
		        use: 'bundle-loader'
		    },

		    {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'dist/images/',
                    publicPath: 'images/',
                }
            },
		],
	},

	// Add plugins.
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].css'
	    }),
	    new FileManagerPlugin({
			onEnd: {
				delete: [
					//"./dist/*.map",
					`./dist/*(editor.asset.php|style.asset.php|style.js|
					|app-style.asset.php|app-style.js|
					|theme.asset.php|theme.js|
					|editor.js|common.asset.php|common.js|plumber.asset.php)`
				],
				copy: [
			        { 
			          	source: './src/js', 
			          	destination: './dist/js' 
			        }
		        ]
			}
			
		})
	]
};

module.exports = [Modules];
