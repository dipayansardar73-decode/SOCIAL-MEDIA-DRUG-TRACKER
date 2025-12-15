"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    trend?: "up" | "down" | "neutral";
    icon: ReactNode;
    color?: "blue" | "pink" | "green" | "purple";
    className?: string;
    delay?: number;
}

export function StatCard({
    title,
    value,
    change,
    trend,
    icon,
    color = "blue",
    className,
    delay = 0
}: StatCardProps) {
    const colors = {
        blue: "text-neon-blue border-neon-blue/30 bg-neon-blue/5",
        pink: "text-neon-pink border-neon-pink/30 bg-neon-pink/5",
        green: "text-neon-green border-neon-green/30 bg-neon-green/5",
        purple: "text-neon-purple border-neon-purple/30 bg-neon-purple/5",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={cn(
                "relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm",
                colors[color],
                className
            )}
        >
            <div className="absolute top-0 right-0 p-3 opacity-20">
                <div className="scale-150 transform">
                    {icon}
                </div>
            </div>

            <div className="relative z-10">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{title}</p>
                <div className="mt-2 flex items-baseline gap-3">
                    <h3 className="text-3xl font-bold font-mono tracking-tight text-white">{value}</h3>
                    {change && (
                        <span className={cn(
                            "text-xs font-medium px-2 py-0.5 rounded-full",
                            trend === "up" ? "bg-green-500/20 text-green-400" :
                                trend === "down" ? "bg-red-500/20 text-red-400" :
                                    "bg-gray-500/20 text-gray-400"
                        )}>
                            {change}
                        </span>
                    )}
                </div>
            </div>

            {/* Decorative corners */}
            <div className={cn("absolute top-0 left-0 w-2 h-2 border-t border-l", colors[color].split(" ")[1])} />
            <div className={cn("absolute top-0 right-0 w-2 h-2 border-t border-r", colors[color].split(" ")[1])} />
            <div className={cn("absolute bottom-0 left-0 w-2 h-2 border-b border-l", colors[color].split(" ")[1])} />
            <div className={cn("absolute bottom-0 right-0 w-2 h-2 border-b border-r", colors[color].split(" ")[1])} />
        </motion.div>
    );
}
