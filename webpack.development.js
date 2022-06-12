const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'main': './javascript/src/main.js',
    },
    watch: true,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'javascript/dist'),
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
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
}
