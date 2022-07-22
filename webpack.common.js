const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    experiments: {
        topLevelAwait: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                }
            }, 
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Red',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html'),
        })
    ],
};