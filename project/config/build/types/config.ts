
export type BuildMode = "production" | "development";

export interface Buildpaths {
  entry: string;
  build: string;
  html: string;
}

export interface BultdOptions {
    mode:BuildMode;
    paths:Buildpaths
    isDev:boolean
}
