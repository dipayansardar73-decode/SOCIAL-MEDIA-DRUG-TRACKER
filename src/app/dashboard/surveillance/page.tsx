"use client";

import { motion } from "framer-motion";
import { Camera, Radio, Mic, Maximize2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const feeds = [
    { id: 1, label: "CAM-01: Downtown Harbor", status: "LIVE", type: "video" },
    { id: 2, label: "CAM-02: Warehouse District", status: "LIVE", type: "video" },
    { id: 3, label: "DRONE-A: Thermal Overlay", status: "RECORDING", type: "thermal" },
    { id: 4, label: "SOCIAL: Instagram #BlueLotus", status: "SCRAPING", type: "social" },
    { id: 5, label: "AUDIO-9: Wiretap 302", status: "LISTENING", type: "audio" },
    { id: 6, label: "CAM-04: Metro Station", status: "OFFLINE", type: "video" },
];

function NoiseOverlay() {
    return (
        <div className="absolute inset-0 opacity-10 pointer-events-none z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-20 mix-blend-overlay"></div>
        </div>
    );
}

export default function SurveillancePage() {
    const [selectedFeed, setSelectedFeed] = useState<number | null>(null);

    return (
        <div className="space-y-6 h-[calc(100vh-100px)]">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Surveillance Grid</h2>
                    <p className="text-sm text-gray-400">Multi-source intelligence aggregation</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-red-500 font-mono text-sm tracking-widest">RECORDING</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full pb-10">
                {feeds.map((feed) => (
                    <motion.div
                        key={feed.id}
                        layoutId={`feed-${feed.id}`}
                        onClick={() => setSelectedFeed(feed.id)}
                        className={cn(
                            "relative bg-black border border-dark-border rounded-lg overflow-hidden cursor-pointer group hover:border-neon-blue transition-colors",
                            selectedFeed === feed.id ? "fixed inset-20 z-50 border-neon-blue shadow-2xl" : "min-h-[200px]"
                        )}
                    >
                        {/* Simulated Feed Content */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                            {feed.type === 'video' && (
                                <div className="text-zinc-700 flex flex-col items-center">
                                    <Camera className="w-12 h-12 mb-2 opacity-20" />
                                    <span className="font-mono text-xs opacity-40">SIGNAL: WEAK</span>
                                </div>
                            )}
                            {feed.type === 'thermal' && (
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-50"></div>
                            )}
                            {feed.type === 'audio' && (
                                <div className="w-full flex items-center justify-center gap-1">
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 bg-neon-green"
                                            animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                                            transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5 }}
                                        />
                                    ))}
                                </div>
                            )}
                            <NoiseOverlay />
                        </div>

                        {/* UI Overlays */}
                        <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start z-20">
                            <div className="flex items-center gap-2">
                                <div className={cn(
                                    "w-2 h-2 rounded-full",
                                    feed.status === 'LIVE' ? "bg-red-500 animate-pulse" :
                                        feed.status === 'OFFLINE' ? "bg-gray-500" : "bg-green-500"
                                )} />
                                <span className="text-xs font-mono font-bold text-white shadow-black drop-shadow-md">{feed.label}</span>
                            </div>
                            <Maximize2 className="w-4 h-4 text-white/50 hover:text-white" />
                        </div>

                        {/* Detection Box (Fake) */}
                        {feed.status === 'LIVE' && (
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-neon-green/50 rounded-lg -translate-x-1/2 -translate-y-1/2"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="absolute -top-4 left-0 bg-neon-green/20 text-neon-green text-[10px] px-1">CONFIDENCE: 89%</div>
                            </motion.div>
                        )}

                        {selectedFeed === feed.id && (
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedFeed(null); }}
                                className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded text-sm font-bold z-50 hover:bg-red-700"
                            >
                                CLOSE FEED
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
