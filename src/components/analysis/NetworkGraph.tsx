"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
}

interface Link {
    source: number;
    target: number;
}

export function NetworkGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [selectedNode, setSelectedNode] = useState<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const nodes: Node[] = [];
        const links: Link[] = [];

        // Initialize nodes
        for (let i = 0; i < 30; i++) {
            nodes.push({
                id: i,
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 5 + 3,
                color: i % 5 === 0 ? "#ff00ff" : "#00f3ff",
            });
        }

        // Initialize links
        for (let i = 0; i < 40; i++) {
            links.push({
                source: Math.floor(Math.random() * nodes.length),
                target: Math.floor(Math.random() * nodes.length),
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update positions
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            // Draw links
            ctx.lineWidth = 1;
            links.forEach(link => {
                const sourceNode = nodes[link.source];
                const targetNode = nodes[link.target];
                const dist = Math.hypot(sourceNode.x - targetNode.x, sourceNode.y - targetNode.y);

                const opacity = 1 - dist / 300;
                if (opacity > 0) {
                    ctx.strokeStyle = `rgba(0, 243, 255, ${opacity * 0.5})`;
                    ctx.beginPath();
                    ctx.moveTo(sourceNode.x, sourceNode.y);
                    ctx.lineTo(targetNode.x, targetNode.y);
                    ctx.stroke();
                }
            });

            // Draw nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.fill();

                ctx.strokeStyle = "rgba(255,255,255,0.5)";
                ctx.stroke();

                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = node.color;
            });
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="relative border border-dark-border rounded-xl overflow-hidden bg-black/60">
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="w-full h-full block"
            />
            <div className="absolute top-4 right-4 bg-black/80 border border-dark-border p-4 rounded-lg backdrop-blur-md">
                <h4 className="text-neon-blue font-bold text-sm">Target Cluster Alpha</h4>
                <div className="text-xs text-gray-400 mt-2 space-y-1">
                    <p>Nodes: 30 Active</p>
                    <p>Connections: 142 Verified</p>
                    <p>Centrality: High</p>
                </div>
            </div>
        </div>
    );
}
