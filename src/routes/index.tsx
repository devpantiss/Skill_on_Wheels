import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Connectivity } from "@/components/site/Connectivity";
import { LogoWall } from "@/components/site/LogoWall";
import { Problem } from "@/components/site/Problem";
import { ScrollManifesto } from "@/components/site/ScrollManifesto";
import { Solution } from "@/components/site/Solution";
import { Demo } from "@/components/site/Demo";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Metrics } from "@/components/site/Metrics";
import { Testimonials } from "@/components/site/Testimonials";
import { Tech } from "@/components/site/Tech";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skill on Wheels — The Future of Industrial Training, On The Move" },
      {
        name: "description",
        content:
          "Skill on Wheels brings AI-powered mobile training units with AR/VR simulation to every corner of Odisha — skilling youth for mining, steel, power, shipping and the industries of tomorrow.",
      },
      { property: "og:title", content: "Skill on Wheels — Mobile Skilling for Odisha" },
      {
        property: "og:description",
        content:
          "AI-powered mobile training units delivering immersive AR/VR skilling across Odisha's mining, steel, power, shipping and emerging-tech sectors.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-accent/30">
      <SmoothScroll />
      <Nav />
      <Hero />
      <Connectivity />
      <LogoWall />
      <ScrollManifesto />
      <Problem />
      <Solution />
      <Demo />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <Tech />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster theme="dark" />
    </main>
  );
}
