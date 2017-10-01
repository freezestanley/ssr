const path = require('path');

module.exports = {
    entry: {
        bundle: './public/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', 'react']
                        ]
                    }
                }
            }
        ]
    }
}