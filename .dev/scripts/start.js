/**
 * Start
 *
 * The create-guten-block CLI starts here.
 *
 * TODO:
 *  - checkRequiredFiles
 *  - printBuildError
 */
'use strict';


const start = require( '../config/webpack.config.dev.js' );

const paths = require( './../config/paths' );
const shell = require('shelljs');

//shell.rm('-rf', paths.pluginDist);


module.exports = start;