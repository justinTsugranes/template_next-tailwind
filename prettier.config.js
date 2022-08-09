// prettier.config.js
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./styles/tailwind.config.js",
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es6",
  bracketSpacing: true,
};
