module.exports = {
  moduleFileExtensions: ["ts", "js"],

  transform: {
    ".ts": "ts-jest"
  },

  testEnvironment: "node",
  testRegex: "(/tests/.*|\\.(test|spec))\\.(ts|js)$",

  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["src/*.{js,ts}"]
};
