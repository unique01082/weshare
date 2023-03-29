import { request } from '@umijs/max';

export const getUsers = () => {
  return request('/api/users');
};
