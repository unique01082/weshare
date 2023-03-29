import { Avatar, AvatarProps } from '@/components';
import * as React from 'react';

const UserAvatar: React.FC<AvatarProps> = (props) => {
  return <Avatar {...props} />;
};

export default UserAvatar;
