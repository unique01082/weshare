import { Button, Card, Divider, Input, Space, Typography } from '@/components';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl, useModel } from '@umijs/max';
import React from 'react';

const SubPage: React.FC = () => {
  const intl = useIntl();
  const { count, setCount } = useModel('count');
  const [adminModelValue, setAdminModelValue] = useModel('Admin.model');
  const [sub1MainValue, setSub1MainValue] = useModel('Admin.Sub1.main');
  const [sub1SubSub1Value, setSub1SubSub1Value] = useModel('Admin.Sub1.sub.sub1');
  const methods = useModel('Admin.Sub1.sub.sub2');
  const status = useModel('Admin.Sub1.sub.sub3');
  const [sub2Value, setSub2Value] = useModel('Admin.Sub2.model');

  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      <Card>
        <Space direction="vertical">
          <Typography.Title level={4}>Counter:</Typography.Title>
          <Button onClick={() => setCount(count + 1)}>Clicked: {count} times</Button>
          <Typography.Title level={4}>Admin.model:</Typography.Title>
          <Typography.Paragraph>{adminModelValue}</Typography.Paragraph>
          <Input
            value={adminModelValue}
            onChange={(e) => setAdminModelValue(e.target.value)}
          ></Input>
          <Typography.Title level={4}>Admin.Sub1.main:</Typography.Title>
          <Typography.Paragraph>{sub1MainValue}</Typography.Paragraph>
          <Input value={sub1MainValue} onChange={(e) => setSub1MainValue(e.target.value)}></Input>
          <Typography.Title level={4}>Admin.Sub1.sub.sub1:</Typography.Title>
          <Typography.Paragraph>{sub1SubSub1Value}</Typography.Paragraph>
          <Input
            value={sub1SubSub1Value}
            onChange={(e) => setSub1SubSub1Value(e.target.value)}
          ></Input>
          <Typography.Title level={4}>Admin.Sub2:</Typography.Title>
          <Typography.Paragraph>{sub2Value}</Typography.Paragraph>
          <Input value={sub2Value} onChange={(e) => setSub2Value(e.target.value)}></Input>
          <Divider />
          <Button onClick={() => methods.refresh()}>Reload data</Button>
          <Typography.Title level={5}>Admin.Sub3: {status}</Typography.Title>
          <pre style={{ maxHeight: 300, overflow: 'scroll' }}>
            {JSON.stringify(methods.data, null, 2)}
          </pre>
        </Space>
      </Card>
    </PageContainer>
  );
};

export default SubPage;
