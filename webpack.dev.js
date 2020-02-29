"use strict";

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "fast-sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  performance: {
    hints: false
  }
});
