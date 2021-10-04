const path = require("path");
const colors = require("colors");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
colors.enable();
console.log("Building the necessary production files. Please wait...".cyan);
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle-[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(xml)$/,
        use: ["xml-loader"]
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".tsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles-[name].[contenthash].css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*" //clears the all files/folders inside build
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/logo.ico",
      meta: {
        description: "About web apps"
      }
    })
  ]
};
console.log("Ready. Here you go!".rainbow);
