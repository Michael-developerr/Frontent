
import webpack from "webpack";
import { BultdOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BultdOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            { locales: ["ru", "en"], keyAsDefaultValue: true },
          ],
        ],
      },
    },
  };

  const cssLoaders = buildCssLoader(isDev);
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
  return [fileLoader, babelLoader, svgLoader, typescriptLoader, cssLoaders];
}

// Здесь ты описываешь, как обрабатывать разные типы файлов.

// Loader	Что делает
// ts-loader	Компилирует .ts и .tsx в обычный JS

// css-loader + sass-loader	Обрабатывают .scss и .css, в зависимости от окружения (dev/prod)

// MiniCssExtractPlugin.loader или style-loader	В dev режиме вставляет CSS прямо в JS, а в prod — в отдельные файлы

// file-loader	Копирует картинки, шрифты и т.д.

// @svgr/webpack	Позволяет импортировать SVG как React-компоненты
