import { motion } from "framer-motion";
import { Anchor, Apple, Factory, Flame, Leaf, Mountain, Pickaxe, Waves } from "lucide-react";

const sectors = [
  {
    icon: Pickaxe,
    title: "Mining",
    image: "/assets/images/industrial-sim-command-bay.png",
    copy: "Excavators, dump trucks, mine operations and safety simulations.",
  },
  {
    icon: Factory,
    title: "Steel",
    image: "/assets/images/vr-lab-cinematic.png",
    copy: "Processing plants, manufacturing systems and high-risk industrial workflows.",
  },
  {
    icon: Flame,
    title: "Power",
    image: "/assets/images/industrial-sim-command-bay.png",
    copy: "Thermal, renewable and high-voltage infrastructure training paths.",
  },
  {
    icon: Anchor,
    title: "Shipping",
    image: "/assets/images/industrial-sim-command-bay.png",
    copy: "Ports, cargo terminals, logistics and marine safety operations.",
  },
  {
    icon: Leaf,
    title: "Livelihoods",
    image: "/assets/images/livelihood-nutrition-cinematic.png",
    copy: "Agriculture, fisheries, goatery and tribal entrepreneurship modules.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    image: "/assets/images/livelihood-nutrition-cinematic.png",
    copy: "Smart Anganwadi learning, child nutrition and awareness modules.",
  },
  {
    icon: Waves,
    title: "WASH",
    image: "/assets/images/sanitation-wash-truck.jpeg",
    copy: "Sanitation service operations and route-based field enablement.",
  },
  {
    icon: Mountain,
    title: "Rural Odisha",
    image: "/assets/images/odisha-connectivity-aerial.png",
    copy: "Cinematic generated visuals for landscapes, drone views and route stories.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            Industries We Skill
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-bold tracking-normal md:text-6xl">
            Real fleet coverage, expanded with branded simulation worlds.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map(({ icon: Icon, title, image, copy }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-md border border-border bg-surface"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} Skill on Wheels training asset`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-sm border border-accent/30 bg-background/70 backdrop-blur">
                  <Icon className="size-5 text-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-silver">{copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
