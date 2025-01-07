"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);
  return <></>;
};

export default NotFound;
