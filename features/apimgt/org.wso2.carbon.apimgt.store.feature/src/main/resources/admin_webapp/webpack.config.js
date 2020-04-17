const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

const config = {
    entry: { index: './src/index.js' },
    output: {
            path: path.resolve(__dirname, 'public/dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            publicPath: 'public/dist/',
    },
    node: {
            fs: 'empty',
            net: 'empty', // To fix joi issue: https://github.com/hapijs/joi/issues/665#issuecomment-113713020
    },
    watch: false,
    devtool: 'source-map',
    resolve: {
            alias: {
                AppData: path.resolve(__dirname, 'src/app/data/'),
                AppComponents: path.resolve(__dirname, 'src/app/components/'),
//                AppTests: path.resolve(__dirname, 'source/Tests/'),
            },
            extensions: ['.js', '.jsx'],
    },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: [/node_modules\/(?!(@hapi)\/).*/, /coverage/],
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                        {
                            loader: path.resolve('loader.js'),
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader', // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                        },
                        {
                            loader: 'less-loader', // compiles Less to CSS
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000',
                },
            ],
        },
    externals: {
        Themes: 'AppThemes', // Should use long names for preventing global scope JS variable conflicts
        MaterialIcons: 'MaterialIcons',
        Config: 'AppConfig',
    },
    plugins: [new MonacoWebpackPlugin({ languages: ['xml', 'json', 'yaml'], features: ['!gotoSymbol'] })],
};

if (process.env.NODE_ENV === 'development') {
    config.watch = true;
} else if (process.env.NODE_ENV === 'production') {
    /* ESLint will only run in production build to increase the continues build(watch) time in the development mode */
    const esLintLoader = {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        options: {
            failOnError: true,
            quiet: true,
        },
    };
    config.module.rules.push(esLintLoader);
}

module.exports = function (env) {
    if (env && env.analysis) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
};
