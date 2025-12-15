import { NetworkGraph } from "@/components/analysis/NetworkGraph";
import { Share2, Users, GitBranch } from "lucide-react";

export default function NetworkPage() {
    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Network Link Analysis</h2>
                <p className="text-sm text-gray-400">Visualizing suspect relationships and communication pathways</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                <div className="lg:col-span-2 h-full">
                    <NetworkGraph />
                </div>

                <div className="space-y-4">
                    <div className="bg-dark-surface/50 border border-dark-border p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <Share2 className="w-5 h-5 text-neon-purple" />
                            <h3 className="font-bold text-white">Top Influencers</h3>
                        </div>
                        <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-purple-600 p-[1px]">
                                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-xs font-bold text-white">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-200">Suspect-Alpha-{i}</p>
                                        <p className="text-xs text-gray-500">Bridge Node • High Trust</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-dark-surface/50 border border-dark-border p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <GitBranch className="w-5 h-5 text-neon-pink" />
                            <h3 className="font-bold text-white">Cluster Analysis</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex justify-between">
                                <span>Density</span>
                                <span className="text-white">0.42</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                <div className="w-[42%] bg-neon-pink h-full" />
                            </div>

                            <div className="flex justify-between mt-2">
                                <span>Modularity</span>
                                <span className="text-white">0.78</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                <div className="w-[78%] bg-neon-blue h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
