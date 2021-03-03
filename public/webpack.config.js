const path = require('path')


module.exports = {
    entry: './src/cart.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'cart.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    { loader: 'file-loader' },
                ],
            }
        ]
    }
}

