// src/components/ComputersCanvas.js
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Ensure CanvasLoader is properly defined

// Component to load and display the 3D model
const Computers = ({ isMobile }) => {
  // Update the path to the correct location within the public directory
  const { scene } = useGLTF("/dist/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}  // Lighting settings for better model visibility
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {/* Render the loaded scene with adjustments for scale, position, and rotation */}
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}  // Adjust scale for mobile or desktop
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}  // Adjust position
        rotation={[-0.01, -0.2, -0.1]}  // Adjust rotation
      />
    </mesh>
  );
};

// Component to manage screen size for mobile and render Canvas
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}  // Set device pixel ratio for high-DPI devices
      camera={{ position: [20, 3, 5], fov: 25 }}  // Camera settings
      gl={{ preserveDrawingBuffer: true }}  // Ensure correct rendering when saving images
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}  // Disable zoom for better control
          maxPolarAngle={Math.PI / 2}  // Limit vertical movement
          minPolarAngle={Math.PI / 2}  // Limit vertical movement
        />
        <Computers isMobile={isMobile} />  {/* Display the 3D model */}
      </Suspense>
      <Preload all />  {/* Preload all assets */}
    </Canvas>
  );
};

export default ComputersCanvas;
