var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var plugins =  [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin(
            [
                 { from: './src/assets/images/', to: './assets/images/' }
                ,{ from: './src/assets/favicon.ico', to: './favicon.ico' }
            ]
        )
    ];



module.exports = {
    entry: {
        app: ['./src/vendor.ts', './src/main.ts']
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js'
    },
    resolve: {
         extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },
    plugins: plugins,
    module: {
        loaders: [
         { test: /\.ts$/, loader: 'ts'},
         { test: /\.json$/,  loader: 'json' },
         { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
         { test: /\.html$/,  loader: 'html' },
         { test: /\.css$/, loaders: [ 'style', 'css' ] },
         { test: /\.(eot|woff|woff2|ttf|svg)/, loader: "file-loader" }
        ]
    }
}
