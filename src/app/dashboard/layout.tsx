import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-dark-bg text-gray-200 font-sans selection:bg-neon-blue/30 selection:text-neon-blue">
            <Sidebar />
            <Topbar />
            <main className="pl-64 pt-16 min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-10" />
                <div className="relative z-10 p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
