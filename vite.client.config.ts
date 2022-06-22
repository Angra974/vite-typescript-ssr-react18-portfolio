import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRestart from "vite-plugin-restart";
import viteCopyPlugin from "@col0ring/vite-plugin-copy";

import resolve from "./vite/path";
import { pResolve } from './src/client/helpers/common';
const srcPath = "src/client";
import commonPlugins from './vite/plugin.common';

export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [
      react(),
	  ...commonPlugins,
      viteCopyPlugin([
      {
        src: pResolve('./dist/client/*'),
        target: pResolve('./dist/')
      }
    ])
    
    ],
    resolve: resolve,
    css: {
      modules: {
        generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
      },
    },
  };
});
