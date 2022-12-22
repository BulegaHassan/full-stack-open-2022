module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: "off",
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  globals: {
    require: true,
  },
};
