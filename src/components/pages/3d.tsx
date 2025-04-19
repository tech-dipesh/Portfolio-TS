import { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import Loader from '../add/Loader';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return (
    <div className="fixed inset-0 bg-[#06063a] flex flex-col items-center justify-center text-center px-4">
      <p className="text-[#8a2be2] text-xl mb-4">Failed to load 3D viewer</p>
      <a href="/" className="text-[#3498db] hover:underline">
        Go Home
      </a>
    </div>
  );
}

function AvatarModel() {
  const modelRef = useRef<Mesh>(null);

  useFrame((state: { clock: { elapsedTime: number } }) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={modelRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8a2be2" metalness={0.5} roughness={0.2} />
    </mesh>
  );
}
function Scene() {
  // Correct ref typing - this is the key change
  const controls = useRef<OrbitControlsImpl>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 50 }}
        className="w-full h-full sm:w-[80%] sm:h-[80%] sm:mx-auto"
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <Suspense fallback={<Loader />}>
          <AvatarModel />
        </Suspense>
        <OrbitControls
          ref={controls}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
        />
      </Canvas>

      <button
        onClick={() => controls.current?.reset()}
        className="absolute top-4 right-4 bg-[#30339d] text-white px-4 py-2 rounded hover:bg-[#3498db] transition"
      >
        Reset View
      </button>

      <a
        href="/"
        className="absolute top-4 left-4 bg-[#30339d] text-white px-4 py-2 rounded hover:bg-[#3498db] transition"
      >
        ← Back
      </a>
    </div>
  );
}

export default function ThreeDPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="fixed inset-0 bg-[#06063a]">
        <Scene />
      </div>
    </ErrorBoundary>
  );
}