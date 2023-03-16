import { defineConfig } from '@umijs/max';
import { merge } from 'lodash';
import config from './config';
import { DEV_VARIABLES } from './env';

export default defineConfig(
  merge(config, {
    define: DEV_VARIABLES,
  }),
);
