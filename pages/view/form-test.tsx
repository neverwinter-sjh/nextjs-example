import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import { useOnceEffect } from "../../../lib/customHooks/useOnceEffect";
import FormTest from '../../components/FormTest';

const View: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    console.log('query', router.query);
  }, []);

  return <FormTest />;
};

export default View;
