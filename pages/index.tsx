import { SyntheticEvent, useRef, useEffect } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const iframe = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    return () => {
      if (iframe.current) {
        if (iframe.current.contentWindow) {
          iframe.current.contentWindow.postMessage('test', '*');
        }
      }
    };
  }, [iframe]);

  return (
    <iframe
      ref={iframe}
      src={'http://localhost:4001/damage/login?locale=en&systemId=sixtLeasing'}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
      }}
    ></iframe>
  );
};

export default Home;
