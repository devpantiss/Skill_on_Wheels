import { motion } from "framer-motion";
import { Cpu, MapPin, ShieldCheck } from "lucide-react";

const priorities = [
  {
    icon: MapPin,
    title: "District-first access",
    detail:
      "Real units travel to campuses, industrial belts, tribal regions and community spaces where fixed centres cannot reach consistently.",
  },
  {
    icon: Cpu,
    title: "Simulation before exposure",
    detail:
      "Mining, plant, port and nutrition modules let learners practise decisions before they meet live equipment or vulnerable communities.",
  },
  {
    icon: ShieldCheck,
    title: "Human-centred deployment",
    detail:
      "Every visual section uses real project photography first, then generated cinematic assets only where real coverage is missing.",
  },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid gap-4 md:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-md border border-border md:row-span-2">
            <img
              src="/assets/images/livelihoods-campus.jpeg"
              alt="Livelihoods on Wheels mobile training unit at an Odisha campus"
              loading="lazy"
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-md border border-border">
            <img
              src="/assets/images/vr-training-lead.jpeg"
              alt="Trainer using VR headset and controllers during a Skill on Wheels session"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-md border border-border">
            <img
              src="/assets/images/nutri-nest-side-ai.jpeg"
              alt="Nutri Nest smart learning on wheels unit for nutrition education"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            The Distance We Close
          </p>
          <h2 className="mb-8 max-w-xl font-display text-4xl font-bold tracking-normal text-mask-reveal md:text-6xl">
            Rural reach with enterprise-grade training quality.
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-7 text-silver md:text-base">
            The website now treats real project photographs as the proof layer: actual trucks,
            actual interiors, actual learners and facilitators. Holographic visuals are reserved for
            route intelligence, simulations, dashboards and future 3D moments.
          </p>
          <div className="space-y-4">
            {priorities.map(({ icon: Icon, title, detail }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex gap-4 rounded-md border border-border bg-surface/60 p-5"
              >
                <Icon className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-silver">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
