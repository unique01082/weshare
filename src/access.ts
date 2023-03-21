import { User } from 'firebase/auth';

export default function access(initialState: { currentUser?: User } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    isAdmin: currentUser && currentUser.access === 'admin',
  };
}
