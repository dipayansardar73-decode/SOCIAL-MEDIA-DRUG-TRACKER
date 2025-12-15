"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, RefreshCw, Key, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

const encryptedText = `X8k#92!Ld^01... [ENCRYPTED BLOCK] ... qPv@55$Km*99
4jZ&11!Op(33... [SALTED HASH] ... rTy#22^Wq)88
... ACCESS DENIED ...
... SEGMENT 4XA ...`;

const decryptedText = `TARGET IDENTIFIED: CARTEL LOGISTICS
Coordinates: 25.7617° N, 80.1918° W (Miami Port)
Payload: Container #TRX-9902
Contents: 'Blue Sky' Precursors
Date: 2025-10-14
Contact: "The Ghost" via Signal Protocol`;

export default function DecryptionPage() {
    const [progress, setProgress] = useState(0);
    const [isDecrypting, setIsDecrypting] = useState(false);
    const [displayText, setDisplayText] = useState(encryptedText);

    const startDecryption = () => {
        setIsDecrypting(true);
        setProgress(0);
    };

    useEffect(() => {
        if (!isDecrypting) return;

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsDecrypting(false);
                    setDisplayText(decryptedText);
                    return 100;
                }
                return prev + 1;
            });

            // Matrix effect on text
            setDisplayText(prev => {
                if (progress > 90) return decryptedText;
                return prev.split('').map((char, i) => {
                    if (Math.random() > 0.9) return String.fromCharCode(33 + Math.floor(Math.random() * 94));
                    return char;
                }).join('');
            });

        }, 50);

        return () => clearInterval(interval);
    }, [isDecrypting, progress]);

    return (
        <div className="space-y-6 max-w-5xl mx-auto h-[600px] flex flex-col justify-center">
            <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black border border-neon-blue mb-4 relative">
                    <AnimatePresence mode="wait">
                        {progress === 100 ? (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                <Unlock className="w-8 h-8 text-neon-green" />
                            </motion.div>
                        ) : (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                <Lock className="w-8 h-8 text-red-500" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {isDecrypting && (
                        <div className="absolute inset-0 border-2 border-neon-blue rounded-full border-t-transparent animate-spin" />
                    )}
                </div>
                <h2 className="text-2xl font-bold text-white">Military Grade Decryption</h2>
                <p className="text-sm text-gray-400">AES-256 Poly-alphabetic cipher breaker</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Input Block */}
                <div className="bg-black/80 border border-red-500/30 rounded-xl p-6 relative overflow-hidden group">
                    <div className="absolute top-2 right-2 text-xs text-red-500 font-mono flex items-center gap-1">
                        <FileCode className="w-3 h-3" /> ENCRYPTED PAYLOAD
                    </div>
                    <p className="font-mono text-xs text-red-400/60 leading-relaxed break-all">
                        {encryptedText.repeat(3)}
                    </p>
                    <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors pointer-events-none" />
                </div>

                {/* Output Block */}
                <div className={cn(
                    "bg-black/80 border rounded-xl p-6 relative overflow-hidden h-[300px] flex flex-col transition-all",
                    progress === 100 ? "border-neon-green/50 shadow-[0_0_20px_rgba(0,255,100,0.2)]" : "border-neon-blue/30"
                )}>
                    <div className="absolute top-2 right-2 text-xs text-neon-blue font-mono flex items-center gap-1">
                        <Key className="w-3 h-3" />
                        {progress === 100 ? "CLEARTEXT REVEALED" : "PROCESSING..."}
                    </div>

                    <div className="flex-1 font-mono text-sm leading-relaxed whitespace-pre-wrap relative z-10">
                        <span className={progress === 100 ? "text-neon-green" : "text-neon-blue"}>
                            {displayText}
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                            <span className="text-gray-400">BRUTE FORCE PROGRESS</span>
                            <span className="text-neon-blue">{progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={startDecryption}
                    disabled={isDecrypting || progress === 100}
                    className="flex items-center gap-3 px-8 py-4 bg-neon-blue/10 border border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue hover:text-black transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <RefreshCw className={cn("w-5 h-5", isDecrypting && "animate-spin")} />
                    {progress === 100 ? "DECRYPTION COMPLETE" : isDecrypting ? "RUNNING ALGORITHMS..." : "INITIATE SEQUENCE"}
                </button>
            </div>
        </div>
    );
}
