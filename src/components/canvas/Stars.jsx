import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Stars component to render the star field
const Stars = ({ sphere, ...props }) => {
  const ref = useRef();

  // Rotation animation for the stars
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // Check if sphere contains valid numeric values
  if (!sphere || sphere.some(value => isNaN(value))) {
    console.error("Invalid star positions detected.");
    return null;  // If invalid data, return null to prevent rendering
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handling screen size change to determine if it's mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Set the number of stars based on screen size
  const numStars = isMobile ? 2000 : 5000;

  // Generate the sphere with stars and check for valid results
  let sphere = random.inSphere(new Float32Array(numStars), { radius: 1.2 });
  if (sphere.some(value => isNaN(value))) {
    console.error("Generated star positions are invalid.");
    sphere = new Float32Array(0);  // Fallback to empty array if invalid
  }

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Stars sphere={sphere} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
