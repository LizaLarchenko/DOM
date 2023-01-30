//Подключаем модуль path , позволяет получать динамический путь к нашему проекту
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackDevServer = require("webpack-dev-server");

//Экспортируем модули
module.exports = {
  //Входной файл
  entry: "./src/index.js",
  //Файл в котором собирается js проект (выходной файл проекта)
  output: {
    //Название файла
    filename: "bundle.js",
    //Путь, куда созраняется (название папки, dist)
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  //Подключаются модули
  module: {
    //Правила
    rules: [
      {
        //тип файла с которыми мы работаем
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
