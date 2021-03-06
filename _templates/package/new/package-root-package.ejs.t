---
to: packages/<%= name %>/package.json
sh: npm run bootstrap
---
{
  "name": "<%= name %>",
  "version": "1.0.0",
  "license": "MIT",
  "description": "<%= description %>",
  "homepage": "https://github.com/Bartozzz/mads",
  "bugs": "https://github.com/Bartozzz/mads/issues",
  "main": "dist/<%= name %>.umd.js",
  "module": "dist/<%= name %>.es5.js",
  "typings": "dist/types/index.d.ts",
  "files": [
    "dist"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/Bartozzz/mads"
  },
  "engines": {
    "node": ">=6.0.0"
  },
  "scripts": {
    "prebuild": "npm run clear",
    "build": "tsc --module commonjs && rollup -c rollup.config.ts",
    "postbuild": "npm run docs",
    "docs": "typedoc --plugin typedoc-plugin-markdown --readme none --hideSources --out ./docs --name \\`<%= name %>\\`",
    "clear": "rimraf dist coverage docs"
  },
  "devDependencies": {
    "@types/lodash.camelcase": "^4.3.6",
    "@types/rollup-plugin-json": "^3.0.2",
    "@types/rollup-plugin-sourcemaps": "^0.4.2",
    "lodash.camelcase": "^4.3.0",
    "rimraf": "^3.0.2",
    "rollup": "^1.32.0",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-json": "^4.0.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-sourcemaps": "^0.5.0",
    "rollup-plugin-terser": "^5.2.0",
    "rollup-plugin-typescript2": "^0.26.0",
    "typedoc": "^0.16.11",
    "typedoc-plugin-markdown": "^2.2.17",
    "typescript": "^3.8.3"
  }
}
