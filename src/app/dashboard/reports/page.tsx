"use client";

import { motion } from "framer-motion";
import { FileText, Download, Share2, Printer, Archive, Trash2, FolderPlus } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white">Case Management & Reports</h2>
                    <p className="text-sm text-gray-400">Generate and export official surveillance documents</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-neon-blue text-black font-bold rounded hover:bg-white transition-colors">
                    <FolderPlus className="w-4 h-4" /> New Case File
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-dark-surface/50 border border-dark-border rounded-xl p-6 group hover:border-neon-blue transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 group-hover:text-neon-blue transition-colors">
                                <FileText className="w-8 h-8" />
                            </div>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">CONFIDENTIAL</span>
                        </div>

                        <h3 className="font-bold text-white text-lg">Case File #893-{i}AX</h3>
                        <p className="text-sm text-gray-400 mt-1">Suspect: "Blue Phantom"</p>
                        <p className="text-xs text-gray-600 mt-4">Updated: 2 hours ago</p>

                        <div className="flex gap-2 mt-6 pt-4 border-t border-dark-border">
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" title="Download PDF">
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" title="Print">
                                <Printer className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" title="Share Securely">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-black border border-dark-border rounded-xl overflow-hidden mt-8">
                <div className="p-4 bg-zinc-900 border-b border-dark-border flex items-center justify-between">
                    <h3 className="font-bold text-white">Archives</h3>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Search archives..." className="bg-black border border-zinc-700 rounded px-3 py-1 text-sm text-white focus:border-neon-blue focus:outline-none" />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="bg-zinc-900/50 text-xs uppercase font-bold text-gray-500">
                        <tr>
                            <th className="px-6 py-3">File Name</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Size</th>
                            <th className="px-6 py-3">Date Archived</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-dark-border">
                        {[...Array(5)].map((_, i) => (
                            <tr key={i} className="hover:bg-white/5">
                                <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                                    <Archive className="w-4 h-4 text-gray-500" />
                                    Operation_Sun_King_v{i + 1}.pdf
                                </td>
                                <td className="px-6 py-4">PDF Report</td>
                                <td className="px-6 py-4">2.4 MB</td>
                                <td className="px-6 py-4">Oct 24, 2025</td>
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <Download className="w-4 h-4 cursor-pointer hover:text-white" />
                                    <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
