const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: './src/index.js',
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'],},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns:[{ from: "static", to: "static"}],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./index.html",
    }),
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  devtool:
    process.env.NODE_ENV === "production" ? false : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
}