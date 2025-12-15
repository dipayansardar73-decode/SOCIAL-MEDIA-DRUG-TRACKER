"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    ShieldAlert,
    Map,
    Search,
    Network,
    Skull,
    Lock,
    FileText,
    Bot,
    Activity,
    LogOut,
    Fingerprint
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: Activity, label: "Command Center", href: "/dashboard" },
    { icon: Map, label: "Global Threat Map", href: "/dashboard/map" },
    { icon: Search, label: "Surveillance", href: "/dashboard/surveillance" },
    { icon: Network, label: "Network Analysis", href: "/dashboard/network" },
    { icon: Skull, label: "Dark Web", href: "/dashboard/darkweb" },
    { icon: Lock, label: "Decryption", href: "/dashboard/decryption" },
    { icon: Fingerprint, label: "Biometrics", href: "/dashboard/biometrics" },
    { icon: Network, label: "Crypto Trail", href: "/dashboard/crypto" },
    { icon: Bot, label: "AI Detective", href: "/dashboard/ai-assistant" },
    { icon: FileText, label: "Reports", href: "/dashboard/reports" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            className="w-64 h-screen bg-dark-bg border-r border-dark-border flex flex-col fixed left-0 top-0 z-50"
        >
            <div className="p-6 border-b border-dark-border flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-neon-blue animate-pulse-slow" />
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple neon-text">
                    DRUG TRACKER
                </h1>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group",
                                        isActive
                                            ? "bg-neon-blue/10 text-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.2)] border border-neon-blue/20"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <item.icon className={cn(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-neon-blue" : "group-hover:text-white"
                                    )} />
                                    <span className="font-medium tracking-wide">{item.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute right-0 w-1 h-6 bg-neon-blue rounded-l-full"
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-4 border-t border-dark-border">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Terminating Session</span>
                </button>
            </div>
        </motion.aside>
    );
}
