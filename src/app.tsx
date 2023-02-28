import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { SettingDrawer, Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';
import { httpSetting } from '../config/httpSetting';
import layoutSetting from '../config/layoutSetting';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';

const UnAuthorizedPage: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, the page you visited cannot access."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export async function getInitialState(): Promise<{
  layoutSetting?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();

    return {
      fetchUserInfo,
      currentUser,
      layoutSetting: layoutSetting as Partial<LayoutSettings>,
    };
  }

  return {
    fetchUserInfo,
    layoutSetting: layoutSetting as Partial<LayoutSettings>,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    style: { minHeight: '100vh' },
    rightContentRender: () => <RightContent />,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // If not logged in, direct to login page
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
    ],
    // links: isDev
    //   ? [
    //       <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
    //         <LinkOutlined />
    //         <span>OpenAPI</span>
    //       </Link>,
    //     ]
    //   : [],
    links: [],
    menuHeaderRender: undefined,
    unAccessible: <UnAuthorizedPage />,
    childrenRender: (children: React.ReactNode) => {
      // if (initialState?.loading) return <Skeleton />;
      return (
        <>
          {children}
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.layoutSetting}
            onSettingChange={(layoutSetting) => {
              setInitialState((preInitialState: any) => ({
                ...preInitialState,
                layoutSetting,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.layoutSetting,
  };
};

export const request = {
  ...httpSetting,
};
