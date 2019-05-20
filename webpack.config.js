const path = require('path');
const entryPath = './src/';
const entryFile = 'App.js';

const Html = require('html-webpack-plugin');

module.exports = {
    entry: entryPath + entryFile,
    output: {
        filename: 'out.js',
        path: path.resolve(__dirname, `build`),
    },
    plugins: [
        new Html({
            filename: 'index.html',
            template: entryPath + './index.html'
        })
    ],
    devServer: {
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    resolve: {
        //extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                new require('autoprefixer')()
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            }
        ],
    },
};