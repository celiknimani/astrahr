import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-12 border-t border-white/10">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        AstraHR
                    </Link>
                    <p className="text-sm text-muted-foreground/60">
                        &copy; 2026 AstraHR Inc.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-muted-foreground/60 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground/60 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </Container>
        </footer>
    );
}
