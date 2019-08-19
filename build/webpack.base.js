const webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.join(__dirname, "../src"),
            static: path.join(__dirname, "../src/static"),
            pages: path.join(__dirname, "../src/pages"),
            router: path.join(__dirname, "../src/router")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                include: path.resolve(__dirname, '../src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "browsers": [
                                            "last 3 versions",
                                            "safari>= 7"
                                        ]
                                    },
                                    "modules": false,
                                    "debug": false,
                                    "useBuiltIns": "usage",
                                    "corejs": "3.2.1"
                                }
                            ],
                            "@babel/preset-react"
                        ],
                        "plugins": [
                            "@babel/plugin-transform-runtime",
                            [
                                "@babel/plugin-proposal-decorators",
                                {
                                    "legacy": true
                                }
                            ],
                            [
                                "@babel/plugin-proposal-class-properties",
                                {
                                    "loose": true
                                }
                            ],
                            /*[
                                "import",
                                {
                                    "libraryName": "antd",
                                    "libraryDirectory": "es",
                                    "style": "css"
                                }
                            ],*/
                            "@babel/plugin-syntax-dynamic-import",
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        outputPath: 'static/img/',
                        limit: 10
                    }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].min.[ext]',
                            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                            outputPath: 'static/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//自动命名连接符
            cacheGroups: {
                styles: {
                    name: 'style',
                    test: /\.(sass|scss|css)$/,
                    chunks: 'all',
                    enforce: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minChunks: 1,//最少被引用次数
                    priority: -10//优先级更高
                },
                default: {
                    test: /[\\/]src[\\/]js[\\/]/,
                    name: 'default',
                    minChunks: 2,//一般为非第三方公共模块
                    priority: -20,
                    reuseExistingChunk: true
                }
            },
        },
        runtimeChunk: {
            name: entrypoint => `manifest.${entrypoint.name}`
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new webpack.HotModuleReplacementPlugin,
        // new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/static'),
                to: path.resolve(__dirname, '../dist/static'),
            },
        ]),
    ]
};