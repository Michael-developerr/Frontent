// stylelint.config.js
/** @type {import("stylelint").Config} */
export default {
  extends: "stylelint-config-standard-scss",
  customSyntax: "postcss-scss",
  rules: {
    "custom-property-empty-line-before": null,
    "value-keyword-case": null,
    "shorthand-property-no-redundant-values": null,
    "selector-class-pattern": null,
  },
};
