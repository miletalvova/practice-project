import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';

/** @type {import('eslint').Linter.Config[]} */
export default [
  airbnbBase,
  { languageOptions: { globals: globals.node } },
  {
    env: {
      // Other settings
      jest: true,
    },
  },
  pluginJs.configs.recommended,
];

/* module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: { 'prettier/prettier': 'error' },
};
 */
