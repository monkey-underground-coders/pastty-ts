// .eslintrc.js

var jsExtensions = [".js", ".jsx"];
var tsExtensions = [".ts", ".tsx"];
var allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  plugins: ["import"],
  settings: {
    "import/extensions": allExtensions,
    "import/parsers": {
      "@typescript-eslint/parser": tsExtensions
    },
    "import/resolver": {
      node: {
        extensions: allExtensions
      }
    }
  }
};
