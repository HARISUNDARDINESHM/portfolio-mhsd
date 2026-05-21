import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const AnimatedShape = ({ position, color, distort, speed, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#fd79a8" />
        
        {/* Abstract floating shapes */}
        <AnimatedShape position={[-4, 2, -2]} color="#6c5ce7" distort={0.4} speed={1.5} scale={1.5} />
        <AnimatedShape position={[4, -2, -3]} color="#00cec9" distort={0.3} speed={2} scale={2} />
        <AnimatedShape position={[-3, -4, -5]} color="#fd79a8" distort={0.5} speed={1} scale={1.2} />
        <AnimatedShape position={[5, 4, -4]} color="#a18cd1" distort={0.2} speed={1.2} scale={1.8} />
      </Canvas>
    </div>
  );
};

export default Background3D;
