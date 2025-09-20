import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Sphere from "./components/Sphere";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <>
      <div className="w-screen h-screen border-2 border-blue-500">
        <Canvas>
          <mesh>
            <Sphere />
          </mesh>
          <ambientLight intensity={1} color="#faa500" />
          <directionalLight position={[0, 0, 5]} color="black" />
<OrbitControls/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
