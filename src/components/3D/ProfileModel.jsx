import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Float } from "@react-three/drei";
import * as THREE from "three";
import img1 from "../../assets/mhsd_image1.jpg"; // Path relative to components/3D

const ImageModel = () => {
  const meshRef = useRef();
  // Load texture
  const texture = useTexture(img1);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Gentle rotation if the user isn't interacting
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* A slightly curved or segmented plane could be used, but a simple box with depth looks good too */}
        <boxGeometry args={[4.2, 4.2, 0.2]} />
        <meshStandardMaterial map={texture} roughness={0.4} metalness={0.6} />
      </mesh>
    </Float>
  );
};

const ProfileModel = () => {
  return (
    <section className="section profile-section">
      <h2 className="section-title">Interactive 3D Profile</h2>
      <div className="profile-model-container">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#fd79a8" />
          <Suspense fallback={null}>
            <ImageModel />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
    </section>
  );
};

export default ProfileModel;
