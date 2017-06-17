var path = require('path');
//no need to npm install path, only require it

var HtmlWebpackPlugin = require('html-webpack-plugin');
//creates an html file and puts in to dist folder

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [new HtmlWebpackPlugin]
}
