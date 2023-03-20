module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    quotes: [2, "double"],
    semi: [2, "always"],
    "space-before-function-paren": [0],
    "comma-dangle": [0],
    "multiline-ternary": [0],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
