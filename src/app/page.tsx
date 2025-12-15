"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Fingerprint, Lock, ScanLine } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate biometric scan
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center font-mono">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="border border-neon-blue/30 bg-dark-surface/90 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.1)] relative overflow-hidden">
          {/* Scanning Line Effect */}
          {isLoading && (
            <motion.div
              className="absolute inset-0 bg-neon-blue/10 h-1 w-full z-20"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-blue/10 mb-4 border border-neon-blue/50 relative">
              <ShieldAlert className="w-10 h-10 text-neon-blue" />
              <div className="absolute inset-0 rounded-full border border-dashed border-neon-blue/30 animate-spin-slow" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
              RESTRICTED ACCESS
            </h1>
            <p className="text-neon-blue text-xs tracking-[0.2em] animate-pulse">
              GOVERNMENT SURVEILLANCE UNIT
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">Agent ID</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ScanLine className="h-5 w-5 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
                </div>
                <input
                  type="text"
                  defaultValue="AGT-7390-X"
                  className="block w-full pl-10 bg-dark-bg border border-dark-border rounded-lg py-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue transition-all font-mono tracking-widest"
                  placeholder="ENTER ID"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase tracking-wider ml-1">Access Key</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
                </div>
                <input
                  type="password"
                  defaultValue="password"
                  className="block w-full pl-10 bg-dark-bg border border-dark-border rounded-lg py-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue transition-all font-mono tracking-widest"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group overflow-hidden bg-neon-blue text-black font-bold py-4 rounded-lg transition-all hover:bg-neon-blue/90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Fingerprint className="w-5 h-5 animate-pulse" />
                    <span>AUTHENTICATING...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>INITIATE SECURE LOGIN</span>
                  </>
                )}
              </div>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Authorized Personnel Only • IP Logged: 192.168.X.X
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
