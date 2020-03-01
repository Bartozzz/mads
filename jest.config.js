module.exports = {
  moduleFileExtensions: ["ts", "js"],

  transform: {
    ".ts": "ts-jest"
  },

  moduleNameMapper: {
    "^mads-(.*)$": "<rootDir>/packages/mads-$1/src/index.ts"
  },

  testEnvironment: "node",
  testRegex: "(/tests/.*.(test|spec))\\.(ts|js)$",

  collectCoverageFrom: ["<rootDir>/packages/mads-*/src/*.{js,ts}"]
};
