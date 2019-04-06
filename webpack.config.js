const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, // Создаёт отдельный файл app.css
            {
              loader: 'postcss-loader',
              options: { config: { path: './postcss.config.js' } }
            },
            'css-loader',
          ]
        },
        {
          test: /\.scss$/,
          use: [
            // 'style-loader', // Сохраняет стили в app.js
            MiniCssExtractPlugin.loader, // Создаёт отдельный файл app.css
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { config: { path: './postcss.config.js' } }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        { 
          test: /\.hbs$/,
          loader: 'handlebars-loader'
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/assets/templates/index.hbs',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        // filename: devMode ? '[name].css' : '[name].[hash].css'
        filename: '[name].css'
      }),
      new CleanWebpackPlugin()
    ]
};