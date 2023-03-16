import { defineConfig } from '@umijs/max';
import { PROD_VARIABLES } from './env';
import layoutSetting from './layoutSetting';
import openAPI from './openapi';
import routes from './routes';

export default defineConfig({
  define: PROD_VARIABLES,
  hash: true,
  routes,
  theme: {},
  ignoreMomentLocale: true,
  fastRefresh: true,

  //================ @umijs/max configurations ================
  model: {},
  initialState: {},
  title: 'WeShare',
  layout: {
    locale: true,
    ...layoutSetting,
  },
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  antd: {},
  request: {},
  access: {},
  headScripts: [{ src: '/scripts/loading.js', async: true }],

  //================= plugin configuration ==================
  presets: ['umi-presets-pro'],
  openAPI,
  mfsu: {
    strategy: 'normal',
  },
  requestRecord: {},

  reactRouter5Compat: {},
});
