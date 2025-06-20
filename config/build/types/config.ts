export type BuildMode = "production" | "development";

export interface Buildpaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BultdOptions {
  mode: BuildMode;
  paths: Buildpaths;
  isDev: boolean;
  port: number;
}
