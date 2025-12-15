import { ThreatGlobe } from "@/components/maps/ThreatGlobe";
import { StatCard } from "@/components/dashboard/StatCard";
import { Globe, MapPin, Navigation } from "lucide-react";

export default function MapPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Global Intelligence Map</h2>

            <div className="grid gap-4 md:grid-cols-3 mb-6">
                <StatCard
                    title="Active Zones"
                    value="14"
                    change="Critical"
                    trend="down"
                    icon={<Globe className="w-6 h-6" />}
                    color="blue"
                />
                <StatCard
                    title="Tracking"
                    value="892"
                    change="Suspects"
                    trend="up"
                    icon={<MapPin className="w-6 h-6" />}
                    color="pink"
                />
                <StatCard
                    title="Satellite Uplink"
                    value="CONNECTED"
                    trend="neutral"
                    icon={<Navigation className="w-6 h-6" />}
                    color="green"
                />
            </div>

            <ThreatGlobe />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-dark-surface/50 p-4 rounded-xl border border-dark-border">
                    <h4 className="text-neon-blue font-bold mb-2">Region Analysis: South East Asia</h4>
                    <p className="text-sm text-gray-400">
                        Increased chatter detected in Sector 4. Potential shipment movements triangular triangulation suggests origin point near coastal storage facilities.
                    </p>
                    <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-[70%] bg-red-500 animate-pulse"></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-red-400">Threat Level: High</p>
                </div>
                <div className="bg-dark-surface/50 p-4 rounded-xl border border-dark-border">
                    <h4 className="text-neon-pink font-bold mb-2">Region Analysis: Eastern Europe</h4>
                    <p className="text-sm text-gray-400">
                        Crypto-relay nodes active. Decryption in progress. 14 new wallets associated with known cartels identified.
                    </p>
                    <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-[40%] bg-yellow-500"></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-yellow-400">Threat Level: Moderate</p>
                </div>
            </div>
        </div>
    );
}
