const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          { loader: 'babel-loader', options: { rootMode: 'upward-optional' } },
          '@mdx-js/loader',
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        include: /@compiled|packages/,
        use: [
          { loader: 'babel-loader', options: { rootMode: 'upward-optional' } },
          {
            loader: '@compiled/webpack-loader',
            options: {
              importReact: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
