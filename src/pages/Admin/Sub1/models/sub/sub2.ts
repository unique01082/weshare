import { getAuthors } from '@/services/fakerestapi/Authors';
import { useRequest } from 'ahooks';

export default () => {
  return useRequest(getAuthors);
};
