import shopifyEslintPlugin from "@shopify/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const config = [
  {
    ignores: ["assets/**"],
  },
  ...shopifyEslintPlugin.configs.typescript,
  ...shopifyEslintPlugin.configs["typescript-type-checking"],
  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  ...shopifyEslintPlugin.configs.prettier,
];

export default config;
