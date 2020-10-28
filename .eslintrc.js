module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-v-on': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    // "vue/valid-v-slot" : "off",
    'vue/multiline-html-element-content-newline': 'off'
  }
}
