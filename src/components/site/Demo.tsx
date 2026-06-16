import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const markers = ["Sukinda", "Keonjhar", "Angul", "Cuttack", "Ganjam", "Koraput", "Kalahandi"];

export function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.03]);
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="demo" ref={ref} className="relative overflow-hidden bg-black/30 py-32">
      <div className="absolute inset-0 opacity-40">
        <img
          src="/assets/images/odisha-connectivity-aerial.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">Mission Control</p>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-normal text-mask-reveal md:text-6xl">
            One live map for every unit, district and learner.
          </h2>
          <p className="text-silver">
            The generated command layer visualizes animated district routes, fleet readiness,
            certifications and sector modules without using stock imagery.
          </p>
        </div>

        <motion.div
          style={{ rotate, scale, y }}
          className="mx-auto max-w-6xl rounded-md border border-accent/30 bg-surface/80 p-2 shadow-[0_60px_120px_-30px_rgba(0,212,255,0.35)] backdrop-blur"
        >
          <div className="grid overflow-hidden rounded-sm lg:grid-cols-[1fr_.58fr]">
            <img
              src="/assets/images/industrial-sim-command-bay.png"
              alt="Generated industrial simulation command bay for Skill on Wheels"
              loading="lazy"
              className="h-full min-h-[430px] w-full object-cover"
            />
            <div className="border-t border-border bg-background/85 p-6 lg:border-l lg:border-t-0">
              <div className="mb-6 text-xs uppercase tracking-widest text-silver">
                Active district markers
              </div>
              <div className="grid grid-cols-2 gap-3">
                {markers.map((marker, i) => (
                  <div key={marker} className="rounded-sm border border-accent/20 bg-accent/5 p-3">
                    <div className="text-[10px] uppercase tracking-widest text-accent">
                      0{i + 1}
                    </div>
                    <div className="mt-1 font-display font-bold">{marker}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
