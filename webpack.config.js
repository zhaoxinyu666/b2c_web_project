const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require("webpack")

module.exports = {
    //入口文件
    entry: './src/index.js',
    //输出配置
    output: {
        // 输出文件名
        filename: './built.js',
        // 输出文件路径配置
        path: path.resolve(__dirname, 'dist')
    },
    // loader配置
    module: {
        rules: [
            {
                // 匹配js文件
                test: /\.js$/,
                use: 'babel-loader',
            }, 
            {
                // 匹配css文件
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                esModule: false,
                outputPath: 'images',
                },
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader',
            },
            
        ]
    },
    // plugins配置
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    //模式
    mode: 'development', //开发模式
    // 开发服务器 devServer：用来自动化，不用每次修改后都重新输入webpack打包一遍（自动编译，自动打开浏览器，自动刷新浏览器）
    // 启动devServer指令为：npm webpack-dev-server
    devServer: {
        host:"127.0.0.1",
        port: "8080",
        open: true,
    },
}