module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  rules: {
    "indentation": 2,
    "no-descending-specificity": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["include","mixin","each"]
      }
    ]
  }
}
