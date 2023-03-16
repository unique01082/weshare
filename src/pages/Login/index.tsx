import { Alert, message } from '@/components';
import Footer from '@/components/Footer';
import { logInWithEmailAndPassword } from '@/services/firebase/auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { FormattedMessage, history, SelectLang, useIntl, useModel } from '@umijs/max';
import { useMount, useTitle } from 'ahooks';
import React, { useState } from 'react';
import Settings from '../../../config/layoutSetting';
import styles from './styles.less';

const Lang = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  useMount(() => {
    if (initialState?.currentUser) {
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
    }
  });

  const intl = useIntl();

  useTitle(
    `${intl.formatMessage({
      id: 'menu.login',
      defaultMessage: 'Login',
    })} - ${Settings.title}`,
  );

  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      const userCredential = await logInWithEmailAndPassword(values.username, values.password);
      const currentUser = userCredential.user;
      message.success(
        intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successful!',
        }),
      );
      setInitialState((state: any) => ({
        ...state,
        currentUser,
      }));
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
      setLoginFailed(false);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      message.error(defaultLoginFailureMessage);
      setLoginFailed(true);
    }
  };

  return (
    <div className={styles.container}>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo-color.svg" />}
          title="WeShare"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          onFinish={handleSubmit}
        >
          {loginFailed && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: 'Incorrect username/password',
              })}
            />
          )}
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.username.placeholder',
              defaultMessage: 'Username',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.username.required"
                    defaultMessage="Please input your username!"
                  />
                ),
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.password.placeholder',
              defaultMessage: 'Password',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.password.required"
                    defaultMessage="Please input your password!"
                  />
                ),
              },
            ]}
          />

          <a style={{ display: 'block', marginBottom: 24 }}>
            <FormattedMessage id="pages.login.forgotPassword" defaultMessage="Forgot password" />
          </a>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
