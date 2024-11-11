import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Brighter hemisphere light to enhance ambient lighting */}
      <hemisphereLight intensity={0.6} groundColor="gray" skyColor="white" />
      
      {/* SpotLight with increased intensity */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Stronger point light to brighten the object */}
      <pointLight intensity={1.5} position={[10, 10, 10]} />

      {/* Ambient light to reduce shadows and add visibility */}
      <ambientLight intensity={0.5} />

      {/* Directional light to simulate sunlight and provide more focused brightness */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
      />

      {/* Model with adjusted position and scale */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
