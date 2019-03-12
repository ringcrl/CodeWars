module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
          "experimentalObjectRestSpread": true
      }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "globals": {
    "Raven": true, // 文件中注释 /* global Raven */
  },
  "extends": [
    "eslint:recommended", // https://cn.eslint.org/docs/rules/
    "plugin:react/recommended" // https://github.com/yannickcr/eslint-plugin-react
  ], 
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "prefer-const": ["error"],
    "no-var": ["error"],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-control-regex": ["off"],
    "comma-dangle": ["error", "always-multiline"],
    "no-useless-escape": ["off"],
    "no-console": ["off"],
    "react/prop-types": ["off"],
  }
};
