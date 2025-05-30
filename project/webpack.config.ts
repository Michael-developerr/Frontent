import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { Buildpaths } from "build/types/config";
import path from "path";

const paths: Buildpaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

export const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
