"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

const data = [
    { time: '00:00', traffic: 4000, threats: 2400 },
    { time: '04:00', traffic: 3000, threats: 1398 },
    { time: '08:00', traffic: 2000, threats: 9800 },
    { time: '12:00', traffic: 2780, threats: 3908 },
    { time: '16:00', traffic: 1890, threats: 4800 },
    { time: '20:00', traffic: 2390, threats: 3800 },
    { time: '23:59', traffic: 3490, threats: 4300 },
];

export function ActivityChart() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[300px] w-full bg-dark-surface/50 border border-dark-border rounded-xl p-4 relative"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-widest">Network Traffic Analysis</h3>
                <span className="flex items-center gap-2 text-xs text-neon-pink">
                    <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                    High Activity Detected
                </span>
            </div>

            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00f3ff" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff00ff" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#ff00ff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a40" vertical={false} />
                    <XAxis dataKey="time" stroke="#6b7280" style={{ fontSize: '10px' }} />
                    <YAxis stroke="#6b7280" style={{ fontSize: '10px' }} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0f0f20', borderColor: '#2a2a40' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="traffic"
                        stroke="#00f3ff"
                        fillOpacity={1}
                        fill="url(#colorTraffic)"
                    />
                    <Area
                        type="monotone"
                        dataKey="threats"
                        stroke="#ff00ff"
                        fillOpacity={1}
                        fill="url(#colorThreats)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
