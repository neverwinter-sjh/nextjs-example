import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';

const Home: NextPage = () => {
  const iframe = useRef<HTMLIFrameElement>(null);

  const onLoadHandler = (e: any) => {
    console.group('Iframe Loaded');
    console.log('e', e);
    console.log('iframe', iframe);
    iframe.current.contentWindow.postMessage('iframe loaded', '*');
    console.groupEnd();
  };
  return (
    <div className="module">
      <div
        className="inner-container"
        style={{ padding: '50px' }}
      >
        <iframe
          ref={iframe}
          src={'http://10.155.255.15:4001/damage/login?locale=en&systemId=sixtLeasing'}
          style={{
            width: '800px',
            height: '550px',
          }}
          onLoad={e => onLoadHandler(e)}
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
