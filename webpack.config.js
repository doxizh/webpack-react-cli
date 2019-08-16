const webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "static/js/[name]-[hash].js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.join(__dirname, "src"),
            static: path.join(__dirname, "src/static"),
            pages: path.join(__dirname, "src/pages"),
            router: path.join(__dirname, "src/router")
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        host: "0.0.0.0", // 可以使用手机访问
        port: 8080,
        hot: true,
        historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
        proxy: {
            // 代理到后端的服务地址，会拦截所有以api开头的请求地址
            "/api": "http://localhost:3000"
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                include: path.resolve(__dirname, './src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            {
                                // "useBuiltIns": "usage"
                            },
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
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
                            // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
                            publicPath: '../../',   // 根据不同环境指定不同的publicPath
                            hmr: devMode, // 仅dev环境启用HMR功能
                        },
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 100 versions']      //必须设置支持的浏览器才会自动添加添加浏览器兼容
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name:'[name]-[hash].[ext]',
                        outputPath:'static/img/',
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
    devtool: "source-map",
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000,
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    },
    optimization: {
        splitChunks: {
            chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//自动命名连接符
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name:'vendors',
                    minChunks: 1,//最少被引用次数
                    priority: -10//优先级更高
                },
                default: {
                    test: /[\\/]src[\\/]js[\\/]/,
                    name:'default',
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/css/[name]-[contenthash].css",
            publicPath:''
        }),
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
                from: path.resolve(__dirname,'src/static'),
                to: path.resolve(__dirname, 'dist/static'),
            },
        ]),
    ]
};