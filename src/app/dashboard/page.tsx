import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentAlerts } from "@/components/dashboard/RecentAlerts";
import { Users, AlertTriangle, Radio, Globe, Activity } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-dark-border/50">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Command Center</h2>
                    <p className="text-sm text-gray-400">Global Surveillance Overview • <span className="text-neon-green">Live Updates On</span></p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded uppercase font-bold animate-pulse">
                        Defcon 4
                    </div>
                    <div className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs rounded uppercase font-bold">
                        Sector 7
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Active Targets"
                    value="1,284"
                    change="+12%"
                    trend="up"
                    icon={<Users className="w-6 h-6" />}
                    color="blue"
                    delay={0.1}
                />
                <StatCard
                    title="Critical Alerts"
                    value="42"
                    change="+5%"
                    trend="up"
                    icon={<AlertTriangle className="w-6 h-6" />}
                    color="pink"
                    delay={0.2}
                />
                <StatCard
                    title="Active Drones"
                    value="15/20"
                    change="On Patrol"
                    trend="neutral"
                    icon={<Radio className="w-6 h-6" />}
                    color="green"
                    delay={0.3}
                />
                <StatCard
                    title="Net Coverage"
                    value="89%"
                    change="+2.4%"
                    trend="up"
                    icon={<Globe className="w-6 h-6" />}
                    color="purple"
                    delay={0.4}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-7 h-[400px]">
                <div className="md:col-span-4 h-full">
                    <ActivityChart />
                </div>
                <div className="md:col-span-3 h-full">
                    <RecentAlerts />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {/* Placeholder for smaller widgets */}
                <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-4 min-h-[200px] flex flex-col justify-center items-center text-gray-500">
                    <Activity className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-xs uppercase tracking-widest">System Health: 98% Optimal</p>
                </div>
                <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-4 min-h-[200px] flex flex-col justify-center items-center text-gray-500">
                    <Globe className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-xs uppercase tracking-widest">Global Nodes: 8,432</p>
                </div>
                <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-4 min-h-[200px] flex flex-col justify-center items-center text-neon-blue">
                    <div className="text-4xl font-mono font-bold">24:42:12</div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Uptime Counter</p>
                </div>
            </div>
        </div>
    );
}
