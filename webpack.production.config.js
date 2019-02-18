const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: __dirname + '/src/index.js', //唯一入口文件
    output: {
        path: __dirname + '/release/', //打包后的文件存放的地方
        filename: 'js/[name]-[hash].js', //打包后输出文件的文件名
        publicPath: '' //js文件引入目录
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/example/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
