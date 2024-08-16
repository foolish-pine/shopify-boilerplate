# shopify-boilerplate

A starter kit for Shopify theme development.

## Features

- Type checking with [TypeScript](https://www.typescriptlang.org/)
- Bundle TypeScript files using [Babel](https://babeljs.io/)
- Transpile CSS files using [PostCSS](https://postcss.org/)
- Lint and format files with [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) and [Prettier](https://prettier.io/)
- Use [Lefthook](https://github.com/evilmartians/lefthook) to run linters on Git staged files
- Run linters on pull request using [GitHub Actions](https://github.co.jp/features/actions)

## Requirements

- [Volta](https://volta.sh/)
- [rbenv](https://github.com/rbenv/rbenv)

## How to use

Clone this repository and install the dependencies:

```bash
npm i
```

Rename the `.env.example` file to `.env`, and replace `YOUR_STORE_NAME` with your actual store name:

```bash
SHOPIFY_FLAG_STORE=YOUR_STORE_NAME
```

This repository does not include any Shopify themes. You will need to add the theme files yourself. If you are creating a new theme, [it is recommended to use Dawn as a starting point.](https://github.com/Shopify/dawn?tab=readme-ov-file#getting-started)

## Available Commands

### Start Development

```bash
npm start
```

### Build Scripts and Styles

```bash
npm run build
```

### Lint Files

```bash
npm run lint
```

### Fix Files

```bash
npm run fix
```

## Recommended IDE

[Visual Studio Code](https://code.visualstudio.com/)
