import * as React from 'react';

export default () => {
  const [count, setCount] = React.useState(0);

  return { count, setCount };
};
