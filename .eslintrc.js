module.exports = {
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  rules: {
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
