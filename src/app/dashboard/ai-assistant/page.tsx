"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Mic, Image as ImageIcon, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: number;
    role: "user" | "ai";
    content: string;
    timestamp: string;
    searching?: boolean;
}

export default function AIAssistantPage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            role: "ai",
            content: "Agent, I am ready to assist. I have access to Interpol databases, Dark Web crawlers, and local surveillance feeds. What is your query?",
            timestamp: new Date().toLocaleTimeString(),
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: messages.length + 1,
            role: "user",
            content: input,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI processing
        setTimeout(() => {
            const aiMsg: Message = {
                id: messages.length + 2,
                role: "ai",
                content: generateResponse(userMsg.content),
                timestamp: new Date().toLocaleTimeString(),
                searching: true, // Only for demo visual
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (query: string) => {
        if (query.toLowerCase().includes("suspect")) return "Scanning face databases... correlated match found in Sector 7. Link to cartel 'Los Rayos' confirmed. Probability: 94%.";
        if (query.toLowerCase().includes("location")) return "Triangulating signal from last known device... Coordinates: 25.774, -80.19. Miami Downtown area. Moving East at 45km/h.";
        if (query.toLowerCase().includes("drug")) return "Warning: Chemical signature matches 'Blue Sky'. Precursors identified: Methylamine (Class A Restricted). Supplier node likely in Eastern Europe.";
        return "Processing query through neural networks... data insufficient for high-confidence conclusion. Initiating deep web crawl on related keywords.";
    };

    return (
        <div className="flex h-[calc(100vh-100px)] gap-6">
            {/* Main Chat Area */}
            <div className="flex-1 bg-black/50 border border-dark-border rounded-xl flex flex-col overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

                {/* Header */}
                <div className="p-4 border-b border-dark-border bg-dark-bg/90 backdrop-blur flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-white">AI Detective Unit</h3>
                            <p className="text-xs text-neon-green flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                                ONLINE • NEURAL LINK ACTIVE
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-500">
                        <Terminal className="w-5 h-5 hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "flex gap-4 max-w-[80%]",
                                msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                            )}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                msg.role === "ai" ? "bg-neon-blue/20 text-neon-blue border border-neon-blue" : "bg-gray-700 text-white"
                            )}>
                                {msg.role === "ai" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                            </div>
                            <div className={cn(
                                "p-4 rounded-2xl relative",
                                msg.role === "ai" ? "bg-dark-surface border border-dark-border text-gray-200" : "bg-neon-blue/10 border border-neon-blue/30 text-white"
                            )}>
                                <p className="text-sm leading-relaxed">{msg.content}</p>
                                <span className="text-[10px] text-gray-500 block mt-2 font-mono">{msg.timestamp}</span>

                                {msg.searching && (
                                    <div className="mt-3 p-2 bg-black/30 rounded border border-white/5 text-xs text-neon-blue font-mono">
                                        {'>'} Running pattern recognition...
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue flex items-center justify-center">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div className="bg-dark-surface border border-dark-border p-4 rounded-2xl flex gap-1 items-center">
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-dark-bg border-t border-dark-border">
                    <div className="relative flex items-center gap-2">
                        <button className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                            <ImageIcon className="w-5 h-5" />
                        </button>
                        <button className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                            <Mic className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Brief the AI..."
                            className="flex-1 bg-dark-surface border border-dark-border rounded-full py-3 px-6 text-white focus:outline-none focus:border-neon-blue transition-colors"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="p-3 bg-neon-blue text-black rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar Info - Context Awareness */}
            <div className="w-80 hidden lg:flex flex-col gap-4">
                <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-4">
                    <h4 className="text-white font-bold mb-3">Active Context</h4>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center p-2 bg-black/40 rounded border border-white/5">
                            <span className="text-gray-400">Target</span>
                            <span className="text-neon-pink">Antonio Montana</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-black/40 rounded border border-white/5">
                            <span className="text-gray-400">Location</span>
                            <span className="text-white">Miami Sector 7</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-black/40 rounded border border-white/5">
                            <span className="text-gray-400">Threat</span>
                            <span className="text-red-500">Tier 1 (Armed)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-4 flex-1">
                    <h4 className="text-white font-bold mb-3">AI Capabilities</h4>
                    <ul className="space-y-3 text-xs text-gray-400">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Social Media scraping (Instagram, Twitter)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Face Recognition (Interpol DB)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            License Plate Recognition
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Voice Analysis & Translation
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                            Predictive Behavior Modeling (Beta)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
