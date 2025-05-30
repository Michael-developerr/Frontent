import path from "path";

import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";

const config:webpack.Configuration = {

    
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"), //показывает где мы находимся,команда  __dirname тякущая папка
  output: {
    filename: "[name].[contenthash].js",

    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  // module.rules
  // Этот блок отвечает за обработку файлов, которые не являются обычными JavaScript-файлами (например, .ts, .tsx, .css, .scss, изображения и т. д.).
  module: {
    rules: [
      {
        test: /\.tsx?$/, //обрабатывает как ts так tsx
        use: "ts-loader", //здесь мы используем ts-loader ,который позвоялет работать с ts файлами
        exclude: /node_modules/, //искючаем node_modules
      }, //rules обрабатывают лоудеры, они предназначены для обработки файлов, которые выходят за рамки js (pg,jpg,svg,css)
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //чтобы не писать расширение для этих файлов типо index.js
  },
};

export default config
