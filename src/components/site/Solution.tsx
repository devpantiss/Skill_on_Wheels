import { motion } from "framer-motion";
import { Boxes, GraduationCap, Headphones, RadioTower } from "lucide-react";

const modules = [
  {
    icon: Headphones,
    title: "AR/VR Simulation Lab",
    copy: "VR headsets, controllers and guided instructional interfaces for industrial and nutrition learning modules.",
  },
  {
    icon: RadioTower,
    title: "Connected Classroom",
    copy: "On-board smartboards, assisted facilitation and remote-ready learning infrastructure for district deployments.",
  },
  {
    icon: Boxes,
    title: "Industry Props",
    copy: "Mining safety, livelihoods, sanitation and nutrition training kits sit beside digital twin experiences.",
  },
  {
    icon: GraduationCap,
    title: "Assessment Layer",
    copy: "Learner progress, certifications and district coverage feed into a central command dashboard.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl font-display text-4xl font-bold tracking-normal md:text-6xl"
          >
            Inside the mobile training ecosystem.
          </motion.h2>
          <p className="max-w-sm border-l border-accent pl-4 text-sm leading-6 text-silver">
            Real project photos anchor the unit. Generated holographic assets extend it into
            simulations, dashboards and route intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-md border border-accent/30 lg:col-span-7"
          >
            <img
              src="/assets/images/vr-lab-cinematic.png"
              alt="Cinematic AR/VR simulation lab inside a Skill on Wheels mobile training unit"
              loading="lazy"
              className="h-[580px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-lg p-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                Generated from Real Unit References
              </p>
              <h3 className="font-display text-3xl font-bold">
                A cinematic view of the mobile AR/VR training lab.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative overflow-hidden rounded-md border border-border bg-surface lg:col-span-5"
          >
            <img
              src="/assets/images/mining-lab-night.jpeg"
              alt="Real Skill on Wheels mobile mining lab interior at night"
              loading="lazy"
              className="h-[580px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                Real Project Photo
              </p>
              <h3 className="font-display text-2xl font-bold">The actual night-lit mobile lab.</h3>
            </div>
          </motion.div>

          {modules.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-md border border-border bg-surface/75 p-6 lg:col-span-3"
            >
              <Icon className="mb-5 size-7 text-accent" />
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-silver">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
