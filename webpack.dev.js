const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: '/dist',
        hot: true,
        open: true,
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
  });
