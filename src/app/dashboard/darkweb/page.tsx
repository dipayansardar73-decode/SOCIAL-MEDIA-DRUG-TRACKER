"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Lock, ExternalLink, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function DarkWebPage() {
    const [logs, setLogs] = useState<string[]>([
        "Connecting to Tor circuit...",
        "Handshake established [Node 84.22.1.X]",
        "Accessing marketplace listing index...",
        "Decryption key negotiated.",
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = [
                `Scraping hidden service [onion.${Math.random().toString(36).substr(2, 8)}]...`,
                `Keyword match found: "Blue Sky" in pricing table`,
                `Intercepted pgp_signature block...`,
                `Wallet address extracted: bc1${Math.random().toString(36).substr(2, 20)}...`,
            ];
            const randomLog = newLog[Math.floor(Math.random() * newLog.length)];
            setLogs(prev => [...prev.slice(-15), `[${new Date().toLocaleTimeString()}] ${randomLog}`]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-100px)]">
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Dark Web Monitoring</h2>
                        <p className="text-sm text-gray-400">Deep web crawler & marketplace analyzer</p>
                    </div>
                    <div className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs font-mono text-green-500 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        TOR CIRCUIT ACTIVE
                    </div>
                </div>

                {/* Browser Simulator */}
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden h-[500px] flex flex-col">
                    <div className="bg-zinc-800 p-2 flex items-center gap-2 border-b border-zinc-700">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 bg-black/50 rounded px-3 py-1 text-xs font-mono text-zinc-400 flex items-center justify-between">
                            <span>http://silkroad724...onion/market/listings</span>
                            <Lock className="w-3 h-3 text-green-500" />
                        </div>
                    </div>
                    <div className="p-6 font-mono overflow-y-auto">
                        <div className="border-b border-dashed border-zinc-700 pb-4 mb-4">
                            <h3 className="text-xl text-red-500 font-bold mb-2">MARKETPLACE LISTINGS [ILLEGAL]</h3>
                            <div className="flex gap-4 text-xs text-zinc-500">
                                <span>VENDOR: ghost_rider_X</span>
                                <span>TRUST: 98%</span>
                                <span>ESCROW: ENABLED</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-black/40 p-3 border border-zinc-800 rounded flex gap-4 hover:border-red-500/30 transition-colors">
                                    <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center">
                                        <span className="text-2xl">💊</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <h4 className="text-zinc-300 font-bold">Product ID #{3092 + i}</h4>
                                            <span className="text-neon-blue">0.04 BTC</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 mt-1">High purity crystals. Stealth shipping guaranteed to EU/US.</p>
                                        <div className="flex gap-2 mt-2">
                                            <span className="px-1 py-0.5 bg-red-900/30 text-red-400 text-[10px] rounded">FLAGGED AUTOMATICALLY</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black border border-dark-border rounded-lg p-4 font-mono text-xs h-full overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 mb-4 text-neon-green border-b border-dark-border pb-2">
                    <Terminal className="w-4 h-4" />
                    <span className="font-bold">CRAWLER LOGS</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-1 scrollbar-hide">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-green-500/80"
                        >
                            <span className="text-zinc-500 mr-2">{'>'}</span>
                            {log}
                        </motion.div>
                    ))}
                    <div className="h-4 w-2 bg-green-500 animate-pulse mt-2" />
                </div>
            </div>
        </div>
    );
}
