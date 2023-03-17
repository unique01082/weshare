import { useRequest } from 'ahooks';

export default () => {
  return useRequest(() => Promise.resolve(1));
};
