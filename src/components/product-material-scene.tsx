import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

type MaterialPalette = { base: string; middle: string; surface: string; accent: string };

function LayeredSample({ palette, reducedMotion }: { palette: MaterialPalette; reducedMotion: boolean }) {
  const sample = useRef<Group>(null);

  useFrame(({ clock, pointer }, delta) => {
    if (!sample.current) return;
    const elapsed = reducedMotion ? 0 : clock.getElapsedTime() * 0.12;
    sample.current.rotation.y += (pointer.x * 0.22 + elapsed - sample.current.rotation.y) * Math.min(delta * 2.5, 1);
    sample.current.rotation.x += (0.16 - pointer.y * 0.13 - sample.current.rotation.x) * Math.min(delta * 2.5, 1);
  });

  return (
    <group ref={sample} rotation={[0.16, -0.3, 0.06]}>
      <mesh position={[0, -0.36, 0]} castShadow receiveShadow><cylinderGeometry args={[1.28, 1.28, 0.24, 8, 1]} /><meshPhysicalMaterial color={palette.base} roughness={0.38} metalness={0.38} clearcoat={0.35} /></mesh>
      <mesh position={[0, -0.16, 0]} castShadow receiveShadow><cylinderGeometry args={[1.23, 1.23, 0.18, 8, 1]} /><meshPhysicalMaterial color={palette.middle} roughness={0.3} metalness={0.25} clearcoat={0.6} /></mesh>
      <mesh position={[0, -0.01, 0]} castShadow receiveShadow><cylinderGeometry args={[1.2, 1.2, 0.12, 8, 1]} /><meshPhysicalMaterial color={palette.surface} roughness={0.22} metalness={0.2} clearcoat={0.85} /></mesh>
      <mesh position={[0, 0.07, 0]} castShadow><cylinderGeometry args={[1.08, 1.08, 0.05, 8, 1]} /><meshPhysicalMaterial color={palette.accent} roughness={0.18} metalness={0.14} clearcoat={1} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.04, 0]}><torusGeometry args={[1.4, 0.014, 12, 96]} /><meshStandardMaterial color={palette.accent} metalness={0.68} roughness={0.24} /></mesh>
      <mesh position={[-0.72, 0.23, 0.42]} castShadow><icosahedronGeometry args={[0.09, 1]} /><meshPhysicalMaterial color={palette.surface} roughness={0.15} metalness={0.18} clearcoat={1} /></mesh>
      <mesh position={[0.79, 0.18, -0.34]} castShadow><icosahedronGeometry args={[0.055, 1]} /><meshPhysicalMaterial color={palette.accent} roughness={0.15} metalness={0.18} clearcoat={1} /></mesh>
    </group>
  );
}

export default function ProductMaterialScene({ palette, reducedMotion }: { palette: MaterialPalette; reducedMotion: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0.2, 5.4], fov: 38 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.15} />
      <directionalLight position={[3, 4, 5]} intensity={3.3} />
      <pointLight color={palette.accent} position={[-3, 1, 2]} intensity={20} distance={8} />
      <pointLight color={palette.middle} position={[2, -2, -2]} intensity={12} distance={7} />
      <LayeredSample palette={palette} reducedMotion={reducedMotion} />
    </Canvas>
  );
}