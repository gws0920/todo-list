import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import WindiCSS from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    AutoImport({
      imports: ['react'],
      dts: './auto-imports.d.ts',
      dirs: ['src/utils'],
    }),
    svgr({
      svgrOptions: {
        svgo: true,
        namedExport: 'ReactComponent',
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '~svg',
        replacement: resolve(__dirname, './src/assets/svg'),
      },
    ],
  },
});
