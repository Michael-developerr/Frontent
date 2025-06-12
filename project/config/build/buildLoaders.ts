import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
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
