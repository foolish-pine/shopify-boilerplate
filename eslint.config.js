import shopifyEslintPlugin from "@shopify/eslint-plugin";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
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
  },
  ...shopifyEslintPlugin.configs.prettier,
];
