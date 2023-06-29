module.exports = {
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
