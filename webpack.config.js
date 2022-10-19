const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     esModule: false,
          //     name: 'images/[name].[ext]',
          //   }
          // }
        ],
      },
    ],
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, './dist')
  //   }
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/html/index.html',
      filename: './html/index.html',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/html/work.html',
      filename: './html/work.html',
      hash: true,
    }),
  ],
}