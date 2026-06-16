import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Layers3, Radio, ScanLine } from "lucide-react";

const layers = [
  {
    icon: BrainCircuit,
    title: "AI content and assessment",
    copy: "Adaptive lessons, nutrition modules, learner scoring and certification readiness.",
  },
  {
    icon: ScanLine,
    title: "AR/VR simulation core",
    copy: "Mining, steel, power, port, sanitation and safety environments rendered as branded digital twins.",
  },
  {
    icon: Cpu,
    title: "Mobile compute stack",
    copy: "On-board devices, smartboards and VR kits configured for field-ready training delivery.",
  },
  {
    icon: Radio,
    title: "Fleet command layer",
    copy: "Route intelligence, district status, unit readiness and partner reporting from one interface.",
  },
];

export function Tech() {
  return (
    <section id="tech" className="border-y border-border bg-black/30 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            Technology Stack
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold tracking-normal md:text-6xl">
            A visual system built for real proof and future motion.
          </h2>
          <p className="mb-8 text-sm leading-7 text-silver">
            The asset folders now support images, videos, animations, models and icons. Real photos
            lead the experience; placeholders describe the custom media to render next.
          </p>
          <div className="space-y-3">
            {layers.map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5 rounded-md border border-border bg-surface/65 p-5 transition-all hover:border-accent/50"
              >
                <Icon className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <div className="font-display font-bold">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-silver">{copy}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative overflow-hidden rounded-md border border-accent/30 glow-cyan"
        >
          <img
            src="/assets/images/nutri-nest-side-ai.jpeg"
            alt="Nutri Nest Skill on Wheels unit showing AI, AR/VR and smartboard education features"
            loading="lazy"
            className="h-[640px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-background/65 px-3 py-2 text-xs uppercase tracking-widest text-accent backdrop-blur">
              <Layers3 className="size-4" /> Asset stack ready
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-widest text-silver">
              <div className="rounded-sm bg-background/70 p-3">Images</div>
              <div className="rounded-sm bg-background/70 p-3">Motion</div>
              <div className="rounded-sm bg-background/70 p-3">Models</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
