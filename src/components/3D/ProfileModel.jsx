import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

const ImageModel = () => {
  const meshRef = useRef();
  
  // Load front and back textures
  const frontTexture = useTexture("/hari/harisd.jpeg");
  frontTexture.colorSpace = THREE.SRGBColorSpace;
  frontTexture.center.set(0.5, 0.5);
  frontTexture.rotation = -Math.PI / 2; // Rotate front image to be upright

  const backTexture = useTexture("/hari/hari-2ndIV.jpeg");
  backTexture.colorSpace = THREE.SRGBColorSpace;
  backTexture.center.set(0.5, 0.5);
  backTexture.rotation = -Math.PI / 2; // Rotate back image to be upright

  // Gentle rotation if the user isn't interacting
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Parent group receives the dynamic floating/auto-rotation ref */}
      <group ref={meshRef}>
        {/* Rotate cylinder so the circular top face faces the camera */}
        <mesh rotation={[Math.PI / 2, Math.PI, 0]}>
          <cylinderGeometry args={[2.1, 2.1, 0.25, 64]} />
          
          {/* Side/Edge of the cylinder (dark metal/slate color) */}
          <meshStandardMaterial attach="material-0" color="#1e272e" roughness={0.4} metalness={0.8} />
          
          {/* Top cap (Front face) */}
          <meshStandardMaterial attach="material-1" map={frontTexture} roughness={0.4} metalness={0.1} />
          
          {/* Bottom cap (Back face) */}
          <meshStandardMaterial attach="material-2" map={backTexture} roughness={0.4} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

export const ProfileCanvas = () => {
  return (
    <div className="profile-model-container" style={{ pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2.0} />
        <directionalLight position={[0, 0, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#fd79a8" />
        <Suspense fallback={null}>
          <ImageModel />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate 
          autoRotateSpeed={2} 
        />
      </Canvas>
    </div>
  );
};

const ProfileModel = () => {
  return (
    <section className="section profile-section">
      <h2 className="section-title">Interactive 3D Profile</h2>
      <ProfileCanvas />
    </section>
  );
};

export default ProfileModel;
