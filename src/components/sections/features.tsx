import { Container } from "@/components/ui/container";
import {
    Users,
    BarChart3,
    ShieldCheck,
    Zap,
    Bot
} from "lucide-react";

const features = [
    {
        name: "AI-Powered Recruitment",
        description: "Automate sourcing, screening, and scheduling with our intelligent agentic workflows.",
        icon: Bot,
    },
    {
        name: "People Analytics",
        description: "Real-time insights into retention, engagement, and performance metrics across your organization.",
        icon: BarChart3,
    },
    {
        name: "Compliance Guardian",
        description: "Stay compliant with local labor laws automatically. Our AI monitors changing regulations 24/7.",
        icon: ShieldCheck,
    },
    {
        name: "Culture OS",
        description: "Tools to measure and improve psychological safety and team alignment in remote environments.",
        icon: Users,
    },
    {
        name: "Instant Onboarding",
        description: "Generate customized onboarding paths and document bundles in seconds.",
        icon: Zap,
    },
    {
        name: "Global Payroll (Beta)",
        description: "Seamlessly pay your team anywhere in the world with built-in tax handling.",
        icon: ShieldCheck, // Reusing shield for now or find Globe
    },
];

export function Features() {
    return (
        <section className="py-24 bg-secondary/30">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Everything you need to <span className="text-primary">scale</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        AstraHR replaces your fragmented toolset with one cohesive, intelligent platform designed for the AI era.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
