"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Hash, User, AlertOctagon } from "lucide-react";

const alerts = [
    {
        id: 1,
        type: "CRITICAL",
        message: "High-value keyword match detected: 'Blue Magic'",
        location: "Miami, FL",
        time: "2 min ago",
        icon: AlertOctagon,
        color: "text-red-500",
    },
    {
        id: 2,
        type: "WARNING",
        message: "Suspicious crypto transfer > 50 BTC",
        location: "Unknown Relay",
        time: "5 min ago",
        icon: AlertTriangle,
        color: "text-yellow-500",
    },
    {
        id: 3,
        type: "INFO",
        message: "New user cluster identified in existing network",
        location: "Chicago, IL",
        time: "12 min ago",
        icon: User,
        color: "text-blue-400",
    },
    {
        id: 4,
        type: "SURVEILLANCE",
        message: "Drone #42 visual confirmed trigger object",
        location: "Sector 7G",
        time: "15 min ago",
        icon: MapPin,
        color: "text-green-400",
    },
];

export function RecentAlerts() {
    return (
        <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-4 h-full">
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>Live Feed</span>
                <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-150" />
                </div>
            </h3>

            <div className="space-y-4">
                {alerts.map((alert, index) => (
                    <motion.div
                        key={alert.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors border-l-2 border-transparent hover:border-l-neon-blue group"
                    >
                        <div className={`p-2 rounded bg-black/40 ${alert.color}`}>
                            <alert.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <p className="text-xs font-bold text-gray-400 group-hover:text-neon-blue transition-colors">
                                    {alert.type}
                                </p>
                                <span className="text-[10px] text-gray-600 font-mono">{alert.time}</span>
                            </div>
                            <p className="text-sm text-gray-200 mt-1 truncate">{alert.message}</p>
                            <div className="flex items-center gap-1 mt-2 text-[10px] text-gray-500">
                                <MapPin className="w-3 h-3" />
                                <span>{alert.location}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
