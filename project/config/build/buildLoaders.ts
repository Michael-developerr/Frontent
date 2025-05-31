import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, //обрабатывает как ts так tsx
    use: "ts-loader", //здесь мы используем ts-loader ,который позвоялет работать с ts файлами
    exclude: /node_modules/, //искючаем node_modules
  }; 
  return [typescriptLoader];
}
