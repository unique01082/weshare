import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'We Share',
          title: 'We Share',
          href: 'https://wshare.vercel.app',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/unique01082/weshare',
          blankTarget: true,
        },
        {
          key: 'on Vercel',
          title: 'on Vercel',
          href: 'https://vercel.com/unique01082/weshare',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
