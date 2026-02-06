"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1000 }) {
    const pointsRef = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.1;
        pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#E63946"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
            />
        </Points>
    );
}

function Lightning() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const flash = Math.random() > 0.98 ? 1 : 0;
        if (meshRef.current) {
            meshRef.current.scale.setScalar(flash * (1 + Math.random()));
            const material = meshRef.current.material as THREE.MeshBasicMaterial;
            material.opacity = flash * 0.8;
        }
    });

    return (
        <mesh ref={meshRef} position={[2, 0, -2]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0} />
        </mesh>
    );
}

export default function StormScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Particles count={2000} />
                    {/* Add a few more clusters for depth */}
                    <group position={[2, 1, -2]}>
                        <Particles count={500} />
                    </group>
                    <group position={[-2, -1, -3]}>
                        <Particles count={500} />
                    </group>
                </Float>
                <Lightning />
            </Canvas>
        </div>
    );
}
