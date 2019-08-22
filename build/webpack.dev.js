const path = require('path');
const base = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge({
    mode: 'development',
    entry:[
        'react-hot-loader/patch',
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                include: path.resolve(__dirname, '../src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        "plugins": [
                            "react-hot-loader/babel"
                        ]
                    }
                }
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
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
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, "../dist"),
        host: "0.0.0.0", // 可以使用手机访问
        port: 8080,
        hot: true,
        historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
        proxy: {
            '/api': {
                // 代理到后端的服务地址，会拦截所有以api开头的请求地址
                "target": "http://localhost:3000",
                "changeOrigin": true,
                "pathRewrite": {"^/api": ""}
            }
        }
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
}, base);