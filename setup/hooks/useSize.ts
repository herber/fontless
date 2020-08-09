import { useEffect, useState } from 'react';

let isServer = typeof window == 'undefined';

export let useSize = () => {
  const [size, setSize] = useState(() => ({
    width: isServer ? Infinity : window.innerWidth,
    height: isServer ? Infinity : window.innerHeight
  }));

  useEffect((): (() => void) | void => {
    if (isServer) return;

    let handler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
};
