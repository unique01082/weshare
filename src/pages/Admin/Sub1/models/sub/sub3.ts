import { useModel } from '@umijs/max';
import { useEffect, useState } from 'react';

export default () => {
  const methods = useModel('Admin.Sub1.sub.sub2');
  const [status, setStatus] = useState<string>(methods.loading ? 'Loading...' : 'Ready!');

  useEffect(() => {
    setStatus(methods.loading ? 'Loading...' : 'Ready!');
  }, [methods.loading]);

  return status;
};
