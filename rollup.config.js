import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from 'rollup-plugin-esbuild';
import postcss from "rollup-plugin-postcss";

const postcssPresetEnv = require('postcss-preset-env');
const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true
    }),
    commonjs(),
    esbuild(),
    postcss({
      modules: true,
      autoModules: true,
      use: [
        ['sass', {
          includePaths: ["src"]
        }]
      ],
      extensions: ['.scss'],
      plugins: [
        postcssPresetEnv()
      ]
    }),
  ]
};
