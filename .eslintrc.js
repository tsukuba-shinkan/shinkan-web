module.exports = {
  parserOptions: {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "react/prop-types": "off",
    "eqeqeq": "error",
    "no-console": "error",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "lf",
        "semi": false,
        "singleQuote": false,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ]
  }
}
