import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
            {/* Soft Gradient Blob Background */}
            <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-[120px] mix-blend-multiply animate-blob" />
                <div className="absolute top-0 -right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply blur-[120px] opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-[120px] opacity-70 animate-blob animation-delay-4000" />
            </div>

            <Container className="flex flex-col items-center text-center">
                <span className="mb-6 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                    The Intelligent HR Platform
                </span>

                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl max-w-5xl leading-[0.95] mb-8">
                    Built for everything <br />
                    HR has become
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed mb-10">
                    One Intelligent HR Platform for every role you play — Core HR, Recruiting, Performance & Development and more.
                    <br /><span className="font-semibold text-foreground mt-2 block">Coming 2026.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button size="xl" className="rounded-lg h-14 px-8 text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                        Join the Waitlist
                    </Button>
                    <Button variant="outline" size="xl" className="rounded-lg h-14 px-8 text-base font-semibold border-2 border-primary/10 hover:bg-secondary/50">
                        Read the Vision
                    </Button>
                </div>
            </Container>
        </section>
    );
}
