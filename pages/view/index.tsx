import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useOnceEffect } from "../../../lib/customHooks/useOnceEffect";
import CountView from '../../components/CountView';

const View: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    console.log("query", router.query);
  }, []);

  return (
      <div><CountView title={'Freude schöner Götterfunken mais s\'est aussi adapté à la bureautique informatique'} count={5} /></div>
  );
};

export default View;
