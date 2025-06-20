import { BultdOptions } from "./types/config";
import { ResolveOptions } from "webpack";
// Настройка того, как Webpack ищет файлы и модули.
export function buildResolvers(options: BultdOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFields: ["browser", "module", "main"],
    alias: {},
    fallback: {
        process: require.resolve("process/browser.js"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
    
      url: require.resolve("url/"),
      path: require.resolve("path-browserify"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      assert: require.resolve("assert/"),
      os: require.resolve("os-browserify/browser"),
      fs: false,
      net: false,
      tls: false,
      worker_threads: false,
    },
  };
}
// extensions	Какие расширения файлов можно не указывать в импортах (.tsx, .ts, .js)
// preferAbsolute	Использовать абсолютные импорты (если доступно)
// modules	Где искать модули (например: src и node_modules)
// mainFields	Какие поля смотреть в package.json (в каком порядке — "browser", "module", "main")
// fallback	🛠 Полифиллы — подмена Node.js модулей, чтобы всё работало в браузере (например, path, stream, buffer, process, url и т.д.)