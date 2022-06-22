import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import ViteRestart from "vite-plugin-restart";
import { ViteEjsPlugin } from "vite-plugin-ejs";

import resolve from "./vite/path";
import commonPlugins from './vite/plugin.common';


export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [
      react(),
	  ...commonPlugins,
    ],
    resolve: resolve,
    css: {
      modules: {
        generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
      },
    },
  };
});
