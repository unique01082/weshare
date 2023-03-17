import { Alert, message, Tabs } from '@/components';
import Footer from '@/components/Footer';
import {
  auth,
  logInWithEmailAndPassword,
  logInWithFacebook,
  logInWithGithub,
  logInWithGoogle,
  logInWithPhoneNumber,
} from '@/services/firebase/auth';
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { FormattedMessage, history, SelectLang, useIntl, useModel } from '@umijs/max';
import { useMount, useTitle } from 'ahooks';
import { ConfirmationResult, RecaptchaVerifier, UserCredential } from 'firebase/auth';
import React, { useState } from 'react';
import Settings from '../../../config/layoutSetting';
import styles from './styles.less';

const ActionIcons = () => {
  const { setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const langClassName = useEmotionCss(({ token }) => ({
    marginLeft: '8px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: token.colorPrimaryActive,
    },
  }));

  const handleThirdPartyLogIn = async (loginFn: () => Promise<UserCredential>) => {
    try {
      const userCredential = await loginFn();
      const currentUser = userCredential.user;
      setInitialState((state: any) => ({
        ...state,
        currentUser,
      }));
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
      message.success(
        intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successful!',
        }),
      );
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <>
      or sign in with:
      <FacebookOutlined
        key="FacebookOutlined"
        className={langClassName}
        onClick={() => handleThirdPartyLogIn(logInWithFacebook)}
      />
      <GoogleOutlined
        key="GoogleOutlined"
        className={langClassName}
        onClick={() => handleThirdPartyLogIn(logInWithGoogle)}
      />
      <GithubOutlined
        key="GithubOutlined"
        className={langClassName}
        onClick={() => handleThirdPartyLogIn(logInWithGithub)}
      />
      {/* <PhoneLogin key="PhoneOutlined" className={langClassName} /> */}
    </>
  );
};

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
  const [loginType, setLoginType] = useState<string>('account');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | undefined>();

  const handleLoginWithAccount = async (values: API.LoginParams) => {
    try {
      const userCredential = await logInWithEmailAndPassword(values.username, values.password);
      const currentUser = userCredential.user;
      setInitialState((state: any) => ({
        ...state,
        currentUser,
      }));
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
      setLoginFailed(false);
      message.success(
        intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successful!',
        }),
      );
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      message.error(defaultLoginFailureMessage);
      setLoginFailed(true);
    }
  };

  const sendVerifyCode = async (phone: string) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      'get_verification_code_button',
      {
        size: 'invisible',
      },
      auth,
    );

    const confirmationResult = await logInWithPhoneNumber(phone, recaptchaVerifier);
    setConfirmationResult(confirmationResult);
  };

  const handleLoginWithPhoneNumber = async (values: API.LoginParams) => {
    try {
      if (!confirmationResult) {
        return;
      }
      const userCredential = await confirmationResult.confirm(values.code);
      const currentUser = userCredential.user;
      setInitialState((state: any) => ({
        ...state,
        currentUser,
      }));
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
      setLoginFailed(false);
      message.success(
        intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successful!',
        }),
      );
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      message.error(defaultLoginFailureMessage);
      setLoginFailed(true);
    }
  };

  const handleLogin = async (values: API.LoginParams) => {
    switch (loginType) {
      case 'account':
        return handleLoginWithAccount(values);
      case 'phone':
        return handleLoginWithPhoneNumber(values);

      default:
        break;
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
          onFinish={handleLogin}
          actions={[<ActionIcons key="icons" />]}
        >
          <Tabs centered activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey)}>
            <Tabs.TabPane key={'account'} tab={'Account'} />
            <Tabs.TabPane key={'phone'} tab={'Phone Number'} />
          </Tabs>
          {loginFailed && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: 'Incorrect username/password',
              })}
            />
          )}
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your phone number! ',
                  },
                  {
                    pattern: /^\+84\d{9}$/,
                    message: 'The phone number format is wrong! ',
                  },
                ]}
              />
              <ProFormCaptcha
                phoneName="mobile"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                  id: 'get_verification_code_button',
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.captcha.placeholder',
                  defaultMessage: '请输入验证码',
                })}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${intl.formatMessage({
                      id: 'pages.getCaptchaSecondText',
                      defaultMessage: '获取验证码',
                    })}`;
                  }
                  return intl.formatMessage({
                    id: 'pages.login.phoneLogin.getVerificationCode',
                    defaultMessage: '获取验证码',
                  });
                }}
                name="code"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.captcha.required"
                        defaultMessage="请输入验证码！"
                      />
                    ),
                  },
                ]}
                onGetCaptcha={async (phone) => {
                  await sendVerifyCode(phone);
                  message.success('Send success');
                }}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
