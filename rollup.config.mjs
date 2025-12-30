import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import esbuild from 'rollup-plugin-esbuild';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/family-week-viewer.ts',
  output: {
    file: 'dist/family-week-viewer.js',
    format: 'es',
    sourcemap: !isProd,
    inlineDynamicImports: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        '__VERSION__': JSON.stringify(pkg.version),
      },
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    json(),
    esbuild({
      target: 'es2020',
      minify: isProd,
    }),
    isProd && terser({
      format: {
        comments: false,
      },
    }),
  ].filter(Boolean),
};
