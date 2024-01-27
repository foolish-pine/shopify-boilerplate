module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "selector-class-pattern": null,
    "selector-id-pattern": null,
  },
  ignoreFiles: ["**/node_modules/**", "shopify/**", "assets/**"],
};
