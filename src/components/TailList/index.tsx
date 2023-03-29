import { Avatar, Button, List, ListProps, Skeleton } from '@/components';
import * as React from 'react';

type TailListProps<T = any> = ListProps<T>;

export const TailList: React.FC<TailListProps> = (props) => {
  return (
    <List<any>
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      loadMore={<Button onClick={console.log}>loading more</Button>}
      dataSource={[]}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
      {...props}
    />
  );
};

TailList.defaultProps = {};
