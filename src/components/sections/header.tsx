import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-1 text-2xl font-bold tracking-tighter">
                            AstraHR
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-muted-foreground hidden sm:block">
                            Coming 2026
                        </span>
                        <Button size="sm" className="rounded-full px-6">Get Updates</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
