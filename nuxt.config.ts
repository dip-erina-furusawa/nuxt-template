// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
    'shadcn-nuxt',
    [
      '@nuxtjs/stylelint-module',
      {
        extends: [
          'stylelint-config-recommended',
          'stylelint-config-standard',
          'stylelint-config-recommended-vue',
        ],
        overrides: [
          {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html',
          },
        ],
      },
    ],
  ],
  typescript: {
    typeCheck: true,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
});
