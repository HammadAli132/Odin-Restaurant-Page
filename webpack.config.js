const path  = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['./src/index.html'],
    },
    plugins: [
        new HTMLWebpackPlugin ({
            template: './src/index.html',
            inject: 'head',
            scriptLoading: 'defer',
        },),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
        ],
    },
};