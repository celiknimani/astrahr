import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
