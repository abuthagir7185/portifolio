const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: path.resolve(__dirname, 'script.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
