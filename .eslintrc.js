module.exports = {
  extends: ['eslint-config-wolox-node', 'plugin:cypress/recommended'],
  plugins: ['cypress'],
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'class-methods-use-this': 'off'
  }
};
