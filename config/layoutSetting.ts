import { ProLayoutProps } from '@ant-design/pro-components';

const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: false,
  siderMenuType: 'sub',
  pwa: true,
  logo: '/logo-color.svg',
  token: {},

  colorWeak: false,
  title: 'WeShare',
  iconfontUrl: '',
};

export default Settings;
