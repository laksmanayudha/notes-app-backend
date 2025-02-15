import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


export default [
  { rules: {
    ...daStyle.rules,
    'linebreak-style': 'off',
    'camelcase': 'off',
  } },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];