import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useOnceEffect } from "../../../lib/customHooks/useOnceEffect";

const View: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<string>("");
  const data2 = "Hello, world!";

  useOnceEffect(() => {
    if (!router.isReady) return;

    console.group("useOnceEffect");
    console.log(router.query);
    console.groupEnd();

    console.log("my useOnceEffect is running");

    const query = JSON.stringify(router.query);

    setData(query);

    return () => console.log("my useOnceEffect is destroying");
  }, [router.isReady]);

  useOnceEffect(() => {
    console.group("useEffect[]");
    console.log("num :", data);
    console.groupEnd();

    console.log("my useEffect[] is running");
    return () => console.log("my useEffect[] is destroying");
  }, []);

  return <div>{data2}</div>;
};

export default View;
