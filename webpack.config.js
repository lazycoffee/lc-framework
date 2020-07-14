const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fn = (env) => {
    const cwd = process.cwd();
    const isProduction = env.NODE_ENV === 'production';
    const config = {
        mode: env.NODE_ENV || 'development',
        devtool: "inline-source-map",
        entry: {
            index: path.join(cwd, 'lib', 'index.ts'),
            test: path.join(cwd, 'test', 'index.tsx')
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: 'ts-loader' }
            ]
        },
        output: {
            path: path.join(cwd, 'dist'),
            filename: '[name].js'
        },
        plugins: [
            // default index.html
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index']
            }),
            new HtmlWebpackPlugin({
                filename: 'test.html',
                template: path.join(cwd, 'test', 'index.html'),
                chunks: ['test']
            })
        ]
    };
    return config;
}

module.exports = fn;