module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    //'eslint:recommended',
    'plugin:vue/vue3-recommended'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Form', 'Home', 'Show', 'Login', 'Signup', 'Index', 'New', 'Edit']
      }
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'never',
      {
        autofix: false,
        ignore: []
      }
    ]
  }
}
