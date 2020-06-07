# MADS

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/Bartozzz/mads/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Bartozzz/mads?targetFile=package.json)
[![Default CI/CD](https://github.com/Bartozzz/mads/workflows/Default%20CI/CD/badge.svg)](https://github.com/Bartozzz/mads/actions)

**MADS** (_Mathematics, Algorithms, Data Structures_) is a set of TypeScript utility modules for working with various mathematical functions, algorithms and data structures.

> **Note:** documentation and examples for each package are published in their respective [READMEs](#installation). Please, refer to those resources for installation details and API references.

## Installation

| Package                                          | Version                                                                                                                    | Dependencies                                                                                                                                  |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [`mads-constants`](/packages/mads-constants)     | [![npm](https://img.shields.io/npm/v/mads-constants.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-constants)     | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-constants)](https://www.npmjs.com/package/mads-constants)     |
| [`mads-coordinates`](/packages/mads-coordinates) | [![npm](https://img.shields.io/npm/v/mads-coordinates.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-coordinates) | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-coordinates)](https://www.npmjs.com/package/mads-coordinates) |
| [`mads-easing`](/packages/mads-easing)           | [![npm](https://img.shields.io/npm/v/mads-easing.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-easing)           | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-easing)](https://www.npmjs.com/package/mads-easing)           |
| [`mads-graph`](/packages/mads-graph)             | [![npm](https://img.shields.io/npm/v/mads-graph.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-graph)             | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-graph)](https://www.npmjs.com/package/mads-graph)             |
| [`mads-utils`](/packages/mads-utils)             | [![npm](https://img.shields.io/npm/v/mads-utils.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-utils)             | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-utils)](https://www.npmjs.com/package/mads-utils)             |
| [`mads-vec2`](/packages/mads-vec2)               | [![npm](https://img.shields.io/npm/v/mads-vec2.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-vec2)               | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-vec2)](https://www.npmjs.com/package/mads-vec2)               |
| [`mads-vec3`](/packages/mads-vec3)               | [![npm](https://img.shields.io/npm/v/mads-vec3.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-vec3)               | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-vec3)](https://www.npmjs.com/package/mads-vec3)               |
| [`mads-queue`](/packages/mads-queue)             | [![npm](https://img.shields.io/npm/v/mads-queue.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-queue)             | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-queue)](https://www.npmjs.com/package/mads-queue)             |
| [`mads-stack`](/packages/mads-stack)             | [![npm](https://img.shields.io/npm/v/mads-stack.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-stack)             | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-stack)](https://www.npmjs.com/package/mads-stack)             |
| [`mads-heap`](/packages/mads-heap)               | [![npm](https://img.shields.io/npm/v/mads-heap.svg?maxAge=2592000)](https://www.npmjs.com/package/mads-heap)               | [![Dependency Status](https://david-dm.org/Bartozzz/mads.svg?path=packages/mads-heap)](https://www.npmjs.com/package/mads-heap)               |
| <!-- Inject auto-generated packages -->          |

## Contributing

### Development

We have prepared multiple commands to help you develop `mads` on your own. You will need a local copy of [Node.js](https://nodejs.org/en/) installed on your machine. Then, follow the steps bellow:

1.  Install [`lerna`](https://github.com/lerna/lerna) globally:

    ```bash
    $ npm install -g lerna
    ```

2.  Install project dependencies:

    ```bash
    $ npm install
    ```

3.  Install packages dependencies and link them together:

    ```bash
    $ npm run bootstrap
    ```

#### Usage

```bash
$ npm run <command>
```

#### List of commands

| Command     | Description                                                   |
| :---------- | :------------------------------------------------------------ |
| `bootstrap` | Links local packages together and install their dependencies. |
| `build`     | Builds all packages.                                          |
| `docs`      | Builds documentation for all packages.                        |
| `start`     | Starts tests in watch mode for all packages.                  |
| `test`      | Alias for `npm run test:unit` and `npm run test:lint`.        |
| `test:unit` | Starts units tests for all packages.                          |
| `test:lint` | Starts linters for all packages.                              |

### Scaffolding

We use [Hygen](https://www.hygen.io/) to create new ready-to-develop packages for MADS. If you want to automatically create a new package, run the following command and follow the prompt tips:

```bash
$ npx hygen package new
```

### License

**MADS** was created and developed by [Bartosz Łaniewski](https://github.com/Bartozzz). The full list of contributors can be found [here](https://github.com/Bartozzz/mads/graphs/contributors). Each package is [MIT licensed](https://github.com/Bartozzz/mads/blob/master/LICENSE), except for packages that provide a different LICENSE file.

### Bug reporting

[![Github Open Issues](https://img.shields.io/github/issues-raw/Bartozzz/mads.svg)](https://github.com/Bartozzz/mads/issues)
[![Github Closed Issues](https://img.shields.io/github/issues-closed-raw/Bartozzz/mads.svg)](https://github.com/Bartozzz/mads/issues?q=is%3Aissue+is%3Aclosed)
[![Github Pull Requests](https://img.shields.io/github/issues-pr-raw/Bartozzz/mads.svg)](https://github.com/Bartozzz/mads/pulls)

**We want contributing to MADS to be fun, enjoyable, and educational for anyone, and everyone.** Changes and improvements are more than welcome! Feel free to fork and open a pull request. If you have found any issues, please [report them here](https://github.com/project-inra/Bartozzz/mads/new) - they are being tracked on [GitHub Issues](https://github.com/Bartozzz/mads/issues).
