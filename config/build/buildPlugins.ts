// Плагины для расширения Webpack-функциональности.
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BultdOptions } from "./types/config";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  paths,
  isDev,
}: BultdOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProvidePlugin({
      process: "process/browser.js",
      Buffer: ["buffer", "Buffer"],
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  plugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    })
  );
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}

// Плагин	Зачем нужен
// HtmlWebpackPlugin	Создаёт HTML-файл с подключёнными JS/CSS

// MiniCssExtractPlugin	Вытаскивает CSS в отдельный файл, вместо <style> в JS

// webpack.ProvidePlugin	Глобально подставляет process и Buffer в код, чтобы не писать import process from 'process'

// webpack.DefinePlugin	Передаёт глобальные переменные (например __IS_DEV__, чтобы условно подключать dev-фичи)

// webpack.HotModuleReplacementPlugin	Горячая перезагрузка (HMR) — обновление без перезагрузки страницы

// webpack.ProgressPlugin	Просто показывает прогресс при сборке
