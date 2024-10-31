//canvas file directly no side pages
"use client";
import React, { useState, useEffect } from "react";
import CanvasModel from "../canvas";

const Customizer = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center bg-red-300 text-white">
        <div className="w-full h-full bg-slate-700">
          <CanvasModel />
        </div>
      </div>
    </>
  );
  // return <AnimatePresence>{!snap.intro && <>Customiser</>}</AnimatePresence>;
};

export default Customizer;
