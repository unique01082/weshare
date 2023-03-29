import { getUsers } from '@/services/firebase/admin';
import { useRequest } from 'ahooks';

export default function () {
  const {
    data: users,
    loading: fetchingUsers,
    run: fetchUsers,
    refresh: refreshUsers,
  } = useRequest(getUsers, { manual: true });

  return { users, fetchingUsers, fetchUsers, refreshUsers };
}
