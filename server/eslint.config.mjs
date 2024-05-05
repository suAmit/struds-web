import airbnbTs from 'eslint-config-airbnb-typescript/base';
import TsParser from '@typescript-eslint/parser';
import prettier from 'prettier';

export default [
  {
    plugins: {
      airbnbTs,
      prettier,
    },
    languageOptions: {
      parser: TsParser,
    },
  },
];
