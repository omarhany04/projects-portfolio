import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useMediaQuery from "../hooks/useMediaQuery";

const Particles = ({ count = 320 }) => {
  const pointsRef = useRef(null);

  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#6c63ff"),
      new THREE.Color("#00d4ff"),
      new THREE.Color("#a855f7"),
      new THREE.Color("#ec4899")
    ];

    for (let index = 0; index < count; index += 1) {
      const pointIndex = index * 3;
      const x = (Math.random() - 0.5) * 42;
      const y = (Math.random() - 0.5) * 42;
      const z = (Math.random() - 0.5) * 42;

      positions[pointIndex] = x;
      positions[pointIndex + 1] = y;
      positions[pointIndex + 2] = z;
      initialPositions[pointIndex] = x;
      initialPositions[pointIndex + 1] = y;
      initialPositions[pointIndex + 2] = z;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[pointIndex] = color.r;
      colors[pointIndex + 1] = color.g;
      colors[pointIndex + 2] = color.b;
    }

    return { positions, initialPositions, colors };
  }, [count]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const points = pointsRef.current;

    if (!points) {
      return;
    }

    points.rotation.x = elapsedTime * 0.02;
    points.rotation.y = elapsedTime * 0.03;

    const positionAttribute = points.geometry.attributes.position;
    const currentPositions = positionAttribute.array;

    for (let index = 0; index < count; index += 1) {
      const pointIndex = index * 3;
      currentPositions[pointIndex] =
        particleData.initialPositions[pointIndex] + Math.sin(elapsedTime * 0.22 + index) * 0.12;
      currentPositions[pointIndex + 1] =
        particleData.initialPositions[pointIndex + 1] +
        Math.sin(elapsedTime * 0.55 + particleData.initialPositions[pointIndex]) * 0.35;
      currentPositions[pointIndex + 2] =
        particleData.initialPositions[pointIndex + 2] + Math.cos(elapsedTime * 0.3 + index) * 0.1;
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particleData.positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particleData.colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const ParticleBackground = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.55} />
        <Particles count={isMobile ? 160 : 320} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
