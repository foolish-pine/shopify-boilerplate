import shopifyEslintPlugin from "@shopify/eslint-plugin";

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
  },
  ...shopifyEslintPlugin.configs.prettier,
];

export default config;
