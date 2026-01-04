import { Container } from "@/components/ui/container";
import { ArrowRight, Sparkles, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InsightSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#fff8f3] text-foreground overflow-hidden relative">
            {/* Decorative gradient blob for the warm feel */}
            <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] bg-gradient-to-t from-orange-200/40 to-transparent blur-[100px] rounded-full translate-y-1/2 translate-x-1/4" />

            <Container className="flex flex-col items-center text-center">
                <span className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-600/80 flex items-center gap-2">
                    <Sparkles className="h-3 w-3" /> Agentic Workflows
                </span>

                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl mb-6">
                    Your autonomous <br />
                    People Ops team
                </h2>

                <p className="max-w-xl text-lg text-muted-foreground mb-8">
                    Stop managing software and start managing outcomes. AI agents handle onboarding, compliance, and payroll automatically.
                </p>



                {/* Mock Graphic: Agent Action Card */}
                <div className="relative w-full max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-orange-100/50 overflow-hidden text-left">
                        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">

                            <div className="text-xs text-muted-foreground font-mono">
                                System Status: Online
                            </div>
                        </div>

                        <div className="p-2 sm:p-4 space-y-2">
                            {/* Agent Item 1 */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-orange-200 transition-colors group">
                                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                    <Bot className="h-5 w-5 text-orange-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-semibold text-sm">Onboarding Agent</h4>
                                        <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">Completed</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Provisioned Slack, Email, and Notion access for <span className="text-foreground font-medium">Sarah Jenkins</span>.
                                    </p>
                                </div>
                                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Agent Item 2 */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 border border-transparent">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <Bot className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-semibold text-sm">Compliance Sentinel</h4>
                                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium animate-pulse">Running</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Auditing Q4 payroll tax filings against updated California labor regulations...
                                    </p>
                                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-blue-500 h-full w-[45%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
