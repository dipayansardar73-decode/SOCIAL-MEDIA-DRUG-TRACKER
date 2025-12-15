"use client";

import { motion } from "framer-motion";
import { ScanFace, Mic, Fingerprint, UserCheck, Search } from "lucide-react";
import { useState } from "react";

export default function BiometricsPage() {
    const [scanning, setScanning] = useState(false);
    const [matchFound, setMatchFound] = useState(false);

    const startScan = () => {
        setScanning(true);
        setMatchFound(false);
        setTimeout(() => {
            setScanning(false);
            setMatchFound(true);
        }, 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-100px)]">
            {/* Visual Scanner */}
            <div className="bg-black border border-dark-border rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-4 left-4 text-neon-blue font-mono text-xs">VISUAL_RECOGNITION_SYSTEM_V4</div>

                <div className="relative w-64 h-64 border-2 border-neon-blue/30 rounded-lg flex items-center justify-center overflow-hidden bg-gray-900 mb-8">
                    {/* Placeholder "Face" - In real app, use webcam or image */}
                    <div className="w-32 h-40 bg-gray-700 rounded-full opacity-50 blur-sm" />
                    <div className="w-20 h-10 bg-gray-700 rounded-full opacity-50 blur-sm absolute bottom-12" />

                    {/* Scan Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Scanning Line */}
                    {scanning && (
                        <motion.div
                            className="absolute w-full h-1 bg-neon-blue shadow-[0_0_15px_#00f3ff]"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    )}

                    {/* Target Reticle */}
                    <div className="absolute inset-4 border border-neon-blue/50 rounded-lg opacity-50">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-blue shadow-[0_0_10px_#00f3ff]" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-blue shadow-[0_0_10px_#00f3ff]" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-blue shadow-[0_0_10px_#00f3ff]" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-blue shadow-[0_0_10px_#00f3ff]" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <button onClick={startScan} disabled={scanning} className="px-6 py-2 bg-neon-blue text-black font-bold rounded hover:bg-white transition-colors flex items-center gap-2">
                        <ScanFace className="w-4 h-4" /> {scanning ? "SCANNING..." : "SCAN TARGET"}
                    </button>
                    <button className="px-6 py-2 border border-neon-pink text-neon-pink rounded hover:bg-neon-pink hover:text-black transition-colors flex items-center gap-2">
                        <Mic className="w-4 h-4" /> VOICE PRINT
                    </button>
                </div>

                {matchFound && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 bg-green-900/20 border border-green-500 rounded-lg p-4 w-full max-w-md flex items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold border border-green-500">
                            99%
                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold flex items-center gap-2"><UserCheck className="w-4 h-4" /> MATCH CONFIRMED</h4>
                            <p className="text-xs text-gray-400">Identity: Antonio 'El Rayo' Montana</p>
                            <p className="text-xs text-gray-400">Database ID: #Cartel-772</p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Database Matches */}
            <div className="bg-dark-surface/30 border border-dark-border rounded-xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Fingerprint className="w-5 h-5 text-purple-500" /> Recent Biometric Logs</h3>
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-black/40 rounded border border-white/5 hover:border-purple-500/50 transition-colors">
                            <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden relative">
                                {/* Avatar placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-700 to-gray-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-gray-200">Unknown Subject #{8000 + i}</p>
                                <p className="text-xs text-gray-500">Voice match 45% • {i * 12} mins ago</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs text-yellow-500 font-mono">PARTIAL</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
