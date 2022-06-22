import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
//import i18nResources from "vite-plugin-i18n-resources";

// require('dotenv').config();
//import pResolve from './src/client/Helpers/common';

import commonPlugins from './vite/plugin.common';

// let port = process.env.PORT as unknown as number;
export default defineConfig({
  // ...vite configures
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 7456,
  },
  plugins: [
	...commonPlugins,
/*	i18nResources({
      path: pResolve("public/locales"),
    })
*/  ]
});
