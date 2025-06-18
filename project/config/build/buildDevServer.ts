import { BultdOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BultdOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
// Настройка локального сервера разработки (webpack-dev-server)



// port	На каком порту запускать dev-сервер

// open	Открывать ли браузер автоматически

// historyApiFallback	Нужен для React Router (чтобы работать по всем маршрутам)

// hot	Включает HMR (Hot Module Replacement) — горячую перезагрузку
