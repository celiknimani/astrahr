import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
                            <span className="text-primary">Astra</span>HR
                        </Link>
                    </div>

                    <nav className="hidden md:flex gap-6 items-center">
                        <Link href="/product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Product
                        </Link>
                        <Link href="/solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Solutions
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </Link>
                        <Link href="/company" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Company
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
                            Log in
                        </Link>
                        <Button size="sm">Book Demo</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
