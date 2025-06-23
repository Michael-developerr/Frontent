import type { Configuration, RuleSetRule } from "webpack";
import { Buildpaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: Configuration }) => {
  const paths: Buildpaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"), //Эта строка создаёт абсолютный путь до папки src в твоём проекте,Чтобы Webpack понимал абсолютные импорты из src без необходимости писать длинные относительные пути
  };

  config.resolve ??= {};
  config.resolve.modules ??= [];
  config.resolve.extensions ??= [];

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push("ts", "tsx"); //список расширений, которые Webpack будет автоматически подставлять при импорте файлов.

  // config.module?.rules = config.module?.rules.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test as string)) {
  //     return { ...rule, exclude: /\.svg$/i };
  //   }
  //   return rule;
  // });

  // config.module?.rules?.push({
  //   test: /\.svg$/,
  //   use: ["@svgr/webpack"],
  // });

config.module?.rules?.forEach((rule) => {
    if (
      typeof rule === "object" &&
      rule !== null &&
      rule.test instanceof RegExp &&
      rule.test.test(".svg")
    ) {
      rule.exclude = /\.svg$/i;
    }
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
// Роль webpack.config.ts
// Нужен для сборки проекта, в том числе Storybook, React, CSS/SCSS, картинок и т.д.

// 📦 Webpack отвечает за:

// Загрузку и применение CSS, SCSS, изображений

// Разрешение импортов (import ... from "shared/...")

// Компиляцию всех ресурсов (JSX, TS, SCSS и пр.)

// Пример — добавление поддержки SCSS:

// ts
// Копировать
// Редактировать
// config.module.rules.push({
//   test: /\.scss$/,
//   use: ['style-loader', 'css-loader', 'sass-loader'],
// });
// webpack.config.ts	Поддержка стилей, ассетов, модулей	Webpack / Storybook
