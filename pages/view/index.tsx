import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useOnceEffect } from "../../../lib/customHooks/useOnceEffect";

const View: NextPage = () => {
  const router = useRouter();

  if (router.isReady) {
    console.log("query", router.query);
  }

  useEffect(() => {}, []);

  return <div>View</div>;
};

export default View;
