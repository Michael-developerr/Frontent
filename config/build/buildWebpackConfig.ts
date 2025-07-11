import webpack from "webpack";
import { BultdOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";



export function buildWebpackConfig(options: BultdOptions): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: options.isDev ? "inline-source-map" : false,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}
// entry: точка входа в приложение.

// output: куда и как собирать результат.

// plugins: подключаем плагины (HTML, CSS, HMR и т.д.).

// module.rules: правила обработки .ts, .scss, .svg и т.д.

// resolve: как резолвить импорты (.ts, алиасы, полифиллы).

// devtool: исходники для отладки (source map).

// devServer: локальный сервер для разработки.