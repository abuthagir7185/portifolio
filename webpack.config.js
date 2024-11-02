const path = require('path');

module.exports = {
    entry: './src/script.js',  // Unga project main JS file
    output: {
        filename: 'bundle.js',  // Output filename
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',  // or 'production' depending on need
};
