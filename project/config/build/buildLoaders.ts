import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BultdOptions } from "./types/config";

export function buildLoaders({ isDev }: BultdOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

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
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
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

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  return [fileLoader, svgLoader, typescriptLoader, cssLoaders];
}

// Здесь ты описываешь, как обрабатывать разные типы файлов.





// Loader	Что делает
// ts-loader	Компилирует .ts и .tsx в обычный JS

// css-loader + sass-loader	Обрабатывают .scss и .css, в зависимости от окружения (dev/prod)

// MiniCssExtractPlugin.loader или style-loader	В dev режиме вставляет CSS прямо в JS, а в prod — в отдельные файлы

// file-loader	Копирует картинки, шрифты и т.д.

// @svgr/webpack	Позволяет импортировать SVG как React-компоненты
