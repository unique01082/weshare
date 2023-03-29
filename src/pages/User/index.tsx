import { List, Skeleton, TailList } from '@/components';
import { useModel } from '@umijs/max';
import { useMount } from 'ahooks';
import * as React from 'react';
import UserAvatar from './components/UserAvatar';

const UserPage: React.FC = () => {
  const { users, fetchingUsers, fetchUsers } = useModel('User.index');

  useMount(fetchUsers);

  if (!users || fetchingUsers) {
    return <Skeleton active />;
  }

  return (
    <>
      <TailList
        dataSource={users}
        renderItem={(item, index) => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={item.photoURL && <UserAvatar src={item.photoURL} />}
                title={
                  <a href="https://ant.design">
                    {item?.displayName ?? item?.email ?? item?.phoneNumber}
                  </a>
                }
                description={
                  <pre style={{ zoom: 0.5 }}>
                    {index} - {JSON.stringify(item, null, 2)}
                  </pre>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      ></TailList>
    </>
  );
};
export default UserPage;
