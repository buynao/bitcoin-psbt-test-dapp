import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer/', 'Buffer'] })],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  define: {
    'process.env': {
      NEXT_PUBLIC_RPC_URL: 'https://btc-signet.imdev.works',
      NEXT_PUBLIC_MEMPOOL_API: 'https://babylon.mempool.space',
      NEXT_PUBLIC_API_URL: 'https://staking-api.testnet.babylonchain.io',
      NEXT_PUBLIC_NETWORK: 'signet',
    },
  },
});
