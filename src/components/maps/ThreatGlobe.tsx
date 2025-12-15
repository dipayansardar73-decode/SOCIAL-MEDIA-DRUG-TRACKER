"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

function Exosphere() {
    return (
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.1} />
        </mesh>
    );
}

function ThreatPoint({ position, label }: { position: [number, number, number], label: string }) {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.scale.setScalar(1 + Math.sin(t * 3) * 0.3);
    });

    return (
        <group position={position}>
            <mesh ref={ref}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshBasicMaterial color="#ff00ff" />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.3} />
            </mesh>
            <Html distanceFactor={10}>
                <div className="bg-black/80 border border-neon-pink p-1 rounded text-[8px] text-neon-pink whitespace-nowrap px-2">
                    {label}
                </div>
            </Html>
        </group>
    );
}

function Globe() {
    const threatLocations = useMemo(() => {
        // Simple random points on sphere surface
        const points = [];
        for (let i = 0; i < 15; i++) {
            const phi = Math.acos(-1 + (2 * i) / 15);
            const theta = Math.sqrt(15 * Math.PI) * phi;
            const x = 2 * Math.cos(theta) * Math.sin(phi);
            const y = 2 * Math.sin(theta) * Math.sin(phi);
            const z = 2 * Math.cos(phi);
            points.push({ pos: [x, y, z] as [number, number, number], id: i });
        }
        return points;
    }, []);

    return (
        <group>
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#050510"
                    emissive="#111"
                    roughness={0.5}
                    metalness={0.8}
                />
            </mesh>

            {/* Grid Lines */}
            <mesh>
                <sphereGeometry args={[2.01, 24, 24]} />
                <meshBasicMaterial color="#2a2a40" wireframe transparent opacity={0.3} />
            </mesh>

            {threatLocations.map((p, i) => (
                <ThreatPoint key={i} position={p.pos} label={`TARGET-${p.id}`} />
            ))}

            <Exosphere />
        </group>
    );
}

export function ThreatGlobe() {
    return (
        <div className="w-full h-[600px] border border-dark-border rounded-xl overflow-hidden bg-black/50 relative">
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h3 className="text-xl font-bold text-white">Global Threat Feed</h3>
                <p className="text-neon-blue text-sm">Real-time geospatial visualization</p>
            </div>
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Globe />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
