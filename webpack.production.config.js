const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: __dirname + '/index.js', //唯一入口文件
    output: {
        path: __dirname + '/dist/', //打包后的文件存放的地方
        filename: 'dateformat-js.min.js' //打包后输出文件的文件名
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
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            dry: false // 启用删除文件
        })
    ]
};
