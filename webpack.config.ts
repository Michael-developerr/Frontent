import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, Buildpaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: Buildpaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"), //Стартовая точка сборки, с неё всё начинается
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};

// это основной экспорт конфигурации Webpack. Он экспортирует функцию, которая получает переменные окружения (env) и собирает финальную конфигурацию, используя все модули, которые ты подготовил ранее (buildWebpackConfig, paths, и т.д.).


// 📚 https://webpack.js.org/configuration/

// 🔍 resolve: https://webpack.js.org/configuration/resolve/

// 🔌 plugins: https://webpack.js.org/plugins/

// 🎛️ loaders: https://webpack.js.org/loaders/

// 🧠 fallback: https://webpack.js.org/configuration/resolve/#resolvefallback





// Вопросы которые могут быть 
// ❓ Хочешь ещё?
// Если хочешь, могу:

// Нарисовать визуальную схему всех файлов (webpack.config.ts, buildWebpackConfig, buildLoaders, и т.д.)

// Объяснить, как это всё разворачивается внутри webpack-cli.

// Показать, как удобно сделать webpack.config.ts, чтобы не использовать require, а TypeScript напрямую.

