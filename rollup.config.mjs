import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './index.js',
    output: {
      file: './build/bundle.js',
      format: 'cjs'
    },
    
    plugins: [
      styles(),
      image(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      serve({ open: false, port: 10001 }),
      livereload()
    ]
  };