import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const sceneRef = useRef();

  useEffect(() => {
    // Setup the basic Three.js scene
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the .gltf model
    const loader = new GLTFLoader();
    loader.load('/assets/desktop_pc/scene.gltf', (gltf) => {
      // Check geometry for NaN values
      const geometry = gltf.scene.children[0].geometry;
      geometry.attributes.position.array.forEach((val, idx) => {
        if (isNaN(val)) {
          console.error(`NaN value found at index ${idx}`);
        }
      });

      scene.add(gltf.scene);
      render();
    }, undefined, (error) => {
      console.error('Error loading .gltf file:', error);
    });

    const render = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    // Cleanup on unmount
    return () => {
      if (sceneRef.current) {
        sceneRef.current.remove();
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
