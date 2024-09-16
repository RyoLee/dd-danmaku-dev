import typescript from 'rollup-plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import package_info from './package.json' assert { type: 'json' };
import meta_info from './src/meta.json' assert { type: 'json' };
const banner_meta = {
  package: package_info,
  meta: meta_info,
};
const banner = `
// ==UserScript==
// @name         ${banner_meta.package.name}
// @description  ${banner_meta.package.description}
// @namespace    ${banner_meta.meta.namespace}
// @author       ${banner_meta.package.author}
// @version      ${banner_meta.package.version}
// @copyright    ${banner_meta.meta.copyright}
// @license      ${banner_meta.package.license}
// @icon         ${banner_meta.meta.icon}
// @updateURL    ${banner_meta.meta.updateURL}
// @downloadURL  ${banner_meta.meta.downloadURL}
// @grant        ${banner_meta.meta.grant}
// @match        ${banner_meta.meta.match}
// ==/UserScript==
`;

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/ddd.user.js',
    format: 'umd',
    name: 'ddd',
    banner,
  },
  plugins: [typescript(), resolve(), commonjs(), alias({ entries: [{ find: '@', replacement: './src' }] })],
};
