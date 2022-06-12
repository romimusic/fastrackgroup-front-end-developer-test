const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'main': './javascript/src/main.js',
    },
    watch: false,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'javascript/dist'),
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: '> 0.25%, not dead',
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
};
