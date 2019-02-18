const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: __dirname + '/src/index.js', //唯一入口文件
    output: {
        path: __dirname + '/webpack_dev_server/', //打包后的文件存放的地方
        filename: 'js/[name]-[hash].js', //打包后输出文件的文件名
        publicPath: '' //js文件引入目录
    },

    devServer: {
        contentBase: __dirname + '/webpack_dev_server', //本地服务器所加载的页面所在的目录
        compress: true,
        historyApiFallback: true, //不跳转
        host: '0.0.0.0',
        port: 9090, //端口
        inline: true, //打包后加入一个websocket客户端
        hot: true //热加载
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
