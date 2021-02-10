let mode = 'development';
let target = 'web';
if(process.env.NODE_ENV === 'production'){
    mode = 'production';
    target = 'browserslist';
}

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                } 
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,
                "css-loader",
                'postcss-loader',
                "sass-loader"],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
        open: true,
        hot: true,
    }
}