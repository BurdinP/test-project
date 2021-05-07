const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode: mode,
    target: target,

    devtool: 'source-map',

    output: {
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    devServer: {
        contentBase: './dist',
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: ''},
                    }, 
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader',
                ],                    
                
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],
}