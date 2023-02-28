import { defineConfig } from '@umijs/max';
import { merge } from 'lodash';
import config from './config';

export default defineConfig(
  merge(config, {
    define: {
      TEST: 'TEST value for dev environment',
    },
    clickToComponent: {
      editor: 'vscode',
    },
  }),
);
