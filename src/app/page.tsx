import { Hero } from "@/components/sections/hero";
import { InsightSection } from "@/components/sections/insight-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <InsightSection />
      <Footer />
    </div>
  );
}
