const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    context: __dirname,
    cache: false,
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
    },
    externals: [nodeExternals()],
    node: {
      __dirname: true,
      fs: 'empty'
    }
}