import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@Components',
        replacement: resolve(__dirname, 'src/Components'),
      },
      {
        find: '@Layouts',
        replacement: resolve(__dirname, 'src/Layouts'),
      },
      {
        find: '@Pages',
        replacement: resolve(__dirname, 'src/Pages'),
      },
      {
        find: '@Store',
        replacement: resolve(__dirname, 'src/Store'),
      },
      {
        find: '@Api',
        replacement: resolve(__dirname, 'src/Api'),
      },
      {
        find: '@Config',
        replacement: resolve(__dirname, 'src/Config'),
      },
    ],
  },
  plugins: [react(), tsconfigPaths()],
});
