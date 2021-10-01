const path = require("path");
const colors = require("colors");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
colors.enable();
console.log("Starting the local development server.".yellow);
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: ""
  },
  mode: "development",
  devServer: {
    open: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./build"),
    index: "index.html",
    port: 3000
  },
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*" //clears the all files/folders inside build
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      meta: {
        description: "About web apps"
      }
    })
  ]
};
console.log("Launching...".green);
