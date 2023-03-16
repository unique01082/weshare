import { Card, theme, Typography } from '@/components';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React from 'react';

const Welcome: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const count = useModel('count', ({ count }) => count);
  const { token } = theme.useToken();

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.layoutSetting?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <Typography.Title
          style={{
            color: token.colorTextHeading,
          }}
        >
          Welcome to WeShare!
        </Typography.Title>
        <Typography.Title
          level={3}
          style={{
            color: token.colorTextHeading,
          }}
        >
          {FIREBASE.apiKey}
        </Typography.Title>
        <Typography.Title
          level={3}
          style={{
            color: token.colorTextHeading,
          }}
        >
          REACT_APP_ENV: {REACT_APP_ENV}
        </Typography.Title>
        <Typography.Title
          level={4}
          style={{
            color: token.colorTextHeading,
          }}
        >
          Counter: {count}
        </Typography.Title>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
