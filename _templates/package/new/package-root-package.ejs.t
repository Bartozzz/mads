---
to: packages/<%= name %>/package.json
sh: cd <%= cwd %>/packages/<%= name %> && npm install
---
{
  "name": "<%= name %>",
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
    "prebuild": "rimraf dist",
    "build": "tsc --module commonjs && rollup -c rollup.config.ts",
    "clear": "rimraf dist coverage",
    "start": "jest --watch",
    "test": "npm run test:lint && npm run test:unit",
    "test:unit": "jest --coverage",
    "test:lint": "eslint 'src/**/*.ts' 'tests/**/*.ts'"
  },
  "devDependencies": {
    "@types/jest": "^25.1.3",
    "@types/node": "^13.7.6"
  }
}
