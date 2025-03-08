import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  {
    ignores: ['**/.astro']
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      indent: ['warn', 2],
      'no-unused-vars': 'warn',
      'no-multiple-empty-lines': 'off',
      'no-tabs': 'off',
      quotes: ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-double'],
      'eol-last': 'off',
      'space-before-function-paren': 'off',
      curly: 'off'
    }
  }
]
