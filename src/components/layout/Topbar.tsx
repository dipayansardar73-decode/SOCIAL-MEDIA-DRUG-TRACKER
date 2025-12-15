"use client";

import { Bell, Search, User, Wifi } from "lucide-react";
import { motion } from "framer-motion";

export function Topbar() {
    return (
        <header className="h-16 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border fixed top-0 right-0 left-64 z-40 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 w-96">
                <div className="relative w-full group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="Search database... [Hashtags, Users, Locations]"
                        className="w-full bg-dark-surface border border-dark-border rounded-full py-2 pl-10 pr-4 text-sm text-gray-300 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-neon-green">
                    <Wifi className="w-4 h-4 animate-pulse" />
                    <span>SYSTEM ONLINE</span>
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full animate-ping" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full" />
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-dark-border">
                        <div className="text-right hidden md:block">
                            <p className="text-sm text-white font-medium">Agent Anderson</p>
                            <p className="text-xs text-gray-500">Level 5 Clearance</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px]">
                            <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                                <User className="w-5 h-5 text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
