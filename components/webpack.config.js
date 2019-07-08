const autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['./app.scss', './app.js'],
    output: {
        filename: 'build/bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'build/bundle.css',
                },
            },
            {loader: 'extract-loader'},
            {loader: 'css-loader'},
            {loader: 'postcss-loader',
                options: {
                    plugins: () => [autoprefixer()],
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: ['./node_modules'],
                },
            }
            ],
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            },
        }
        ],
    },
};
