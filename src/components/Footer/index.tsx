import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import { useModel } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const message = useModel('demo');
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'by CEP - FPT Software',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'name',
          title: message,
          href: '/',
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/unique01082/weshare',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
