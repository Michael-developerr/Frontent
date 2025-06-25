import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
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
}
