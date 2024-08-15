var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
var dotenv = require("dotenv");
var webpack = require("webpack");

dotenv.config();

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: `${DIST_DIR}/`,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
