"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Provider = () => {
  return (
    <>
      {/* <ProgressBar
        height="1000vh"
        color="#111"
        options={{ showSpinner: true }}
        shallowRouting
      /> */}
      <Toaster />
    </>
  );
};

export default Provider;
