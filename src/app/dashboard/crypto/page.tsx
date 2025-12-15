"use client";

import { motion } from "framer-motion";
import { Link2, ArrowRightLeft, Wallet, ShieldCheck } from "lucide-react";

export default function CryptoPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Crypto-Forensics Ledger</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/30 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-500">
                            <Wallet className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Seized Assets</p>
                            <h3 className="text-2xl font-bold text-white">₿ 428.05</h3>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 bg-dark-surface/50 border border-dark-border rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <ArrowRightLeft className="w-5 h-5 text-neon-blue" />
                        Transaction Stream
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex justify-between items-center p-2 bg-black/40 rounded border border-white/5">
                                <span className="text-gray-400">TXID: 8a7c...9f2{i}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-neon-blue">{Math.random().toFixed(4)} BTC</span>
                                    <span className="text-gray-600">→</span>
                                    <span className="text-red-400">Suspicious Wallet</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-[400px] bg-black border border-dark-border rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border border-orange-500/20 rounded-full animate-ping opacity-20" />
                    <div className="absolute w-48 h-48 border border-orange-500/40 rounded-full animate-ping delay-100 opacity-20" />
                </div>
                <div className="text-center z-10">
                    <ShieldCheck className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">Full Blockchain Explorer</h3>
                    <p className="text-gray-400 max-w-md mx-auto mt-2">
                        Visualizing 15,000+ nodes. Tracing tumbling services active in Sector 4.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-orange-500/20 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-black transition-colors">
                        EXPAND GRAPH
                    </button>
                </div>
            </div>
        </div>
    );
}
