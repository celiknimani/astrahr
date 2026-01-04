import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70" />
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-accent/5 blur-[100px] rounded-full" />

            <Container className="flex flex-col items-center text-center">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                    The Future of HR is Here
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                    Elevate Your Team with <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Intelligent People Ops
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                    AstraHR combines AI-driven analytics with seamless workflow automation to help modern companies build high-performance cultures.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button size="xl" className="w-full sm:w-auto text-lg px-8 gap-2">
                        Start Free Trial <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="xl" className="w-full sm:w-auto text-lg px-8">
                        Schedule Demo
                    </Button>
                </div>

                <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground/80">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>14-day free trial</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
