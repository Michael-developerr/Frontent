import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BultdOptions } from "./types/config";

export function buildLoaders({isDev}: BultdOptions): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
         options: {
          modules: {
            // auto: true,
            auto: (resPath: string) => Boolean(resPath.includes(".module")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]":'[hash:base64:8]',
            exportLocalsConvention: "camelCase",
            namedExport: false,
          },
          esModule: true,
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // если мы писали на натиавном js, то потребовался babel
  const typescriptLoader = {
    test: /\.tsx?$/, //обрабатывает как ts так tsx
    use: "ts-loader", //здесь мы используем ts-loader ,который позвоялет работать с ts файлами
    exclude: /node_modules/, //искючаем node_modules
  };
  return [typescriptLoader, cssLoaders];
}
