'use strict';

var webpackConfig = require('./webpack.config.js');

module.exports = config => {
    config.set({
        autoWatch: true,
        basePath: '',
        browsers: [
             'PhantomJS' //Headless cmd line only
            // ,'Chrome' //Debug visually
        ],
        colors: true,
        // TODO: Coverage
        // coverageReporter: {
        //     type : 'in-memory'
        // },
        files: [
            { pattern: 'test/main.js', watched: false }
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        preprocessors: {
             'test/main.js': ['webpack', 'sourcemap']
            // TODO: Coverage
            // ,'src/app/**/!(*.spec).ts': ['coverage']
        },
        // TODO: Coverage
        // remapCoverageReporter: {
        //     'text-summary': null,  // to show summary in console 
        //     html: './coverage/html',
        //     cobertura: './coverage/cobertura.xml'
        // },        
        reporters: [
             'dots'
            // TODO: Coverage
            // ,'coverage'
            // ,'remap-coverage'
        ],
        singleRun: true,
        webpack: webpackConfig, 
        webpackServer: {
            noInfo: true
        }
    });
};