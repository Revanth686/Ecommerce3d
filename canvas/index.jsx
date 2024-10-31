//to be updated
import { useState, Suspense } from "react";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Backpack from "../public/Backpack";
import Bracelet from "../public/Bracelet";
import Jacket from "../public/Jacket";
import Shirt1 from "../public/Shirt1";
import Slimfit from "../public/Slimfit";
import preview2 from "../data/Preview2";

//1-backpack 2-slimfit 3-jacket 4-shirt 5-bracelet
const CanvasModel = ({ productId }) => {
  return (
    <div className="bg-slate-700 w-full h-full">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Center>
            {productId === 1 && <Backpack />}
            {productId === 2 && <Slimfit />}
            {productId === 3 && <Jacket />}
            {productId === 4 && <Shirt1 />}
            {productId === 5 && <Bracelet />}
          </Center>
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default CanvasModel;
