const isProduction = process.env.NODE_ENV === 'production'

const ERROR = 2
const WARN = 1
const OFF = 0

let rules = {
  'no-console': OFF,
  'no-unused-vars': WARN,
  // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
  // "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
}

if (isProduction) {
  rules = {
    'no-console': OFF,
    'no-unused-vars': ERROR,
  }
}

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: rules,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // "plugins": ["react-hooks"]
}
