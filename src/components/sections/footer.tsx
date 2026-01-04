import { Container } from "@/components/ui/container";
import Link from "next/link";

const navigation = {
    product: [
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Enterprise", href: "#" },
        { name: "Changelog", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Customers", href: "#" },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
    ],
    social: [
        { name: "Twitter", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "LinkedIn", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <Container className="pt-16 pb-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                            <span className="text-primary">Astra</span>HR
                        </Link>
                        <p className="text-sm leading-6 text-muted-foreground max-w-xs">
                            Building the operating system for the next generation of high-performance, AI-native companies.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social icons would go here */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.product.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} AstraHR Inc. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
