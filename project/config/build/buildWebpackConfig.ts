
import webpack from "webpack";

import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BultdOptions } from "./types/config";


export function buildWebpackConfig(
  options: BultdOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode: mode,
    entry: paths.entry, //показывает где мы находимся,команда  __dirname тякущая папка
    output: {
      filename: "[name].[contenthash].js",

      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    // module.rules
    // Этот блок отвечает за обработку файлов, которые не являются обычными JavaScript-файлами (например, .ts, .tsx, .css, .scss, изображения и т. д.).
    module: {
      rules: buildLoaders(), //rules обрабатывают лоудеры, они предназначены для обработки файлов, которые выходят за рамки js (pg,jpg,svg,css)
    },
    resolve: buildResolvers(), //чтобы не писать расширение для этих файлов типо index.js
  };
}
