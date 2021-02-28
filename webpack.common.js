const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

require('dotenv').config()
console.log('Mode config = ', process.env.NODE_ENV);

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, "dist"),
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: ["ts-loader"]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 25000
              }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new CopyWebpackPlugin(
        {
          patterns: [
            { from: path.resolve(__dirname, 'src/assets/img'), to: `img` }
          ]
        },
      ),
    ]
  };