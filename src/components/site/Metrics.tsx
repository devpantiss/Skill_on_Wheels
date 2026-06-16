import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 2.2, ease: [0.16, 1, 0.3, 1] as const });
      return controls.stop;
    }
  }, [inView, value, mv]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  {
    v: 48000,
    s: "+",
    l: "Youth Trained",
    c: "Industry-ready certifications delivered across Odisha to date.",
  },
  {
    v: 30,
    s: "",
    l: "Districts Covered",
    c: "From Sundargarh's mining belt to the Paradip shoreline.",
  },
  {
    v: 92,
    s: "%",
    l: "Placement Rate",
    c: "Graduates absorbed into partner industries within 90 days.",
  },
  {
    v: 8,
    s: "",
    l: "Core Industries",
    c: "Mining, steel, aluminium, power, hydrocarbon, shipping and more.",
  },
];

export function Metrics() {
  return (
    <section id="metrics" className="py-32 bg-black/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">
            Impact Across Odisha
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-mask-reveal">
            Measured in lives, not slides.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-8 lg:p-10"
            >
              <div className="font-display font-bold text-5xl lg:text-6xl tracking-tighter text-accent mb-4">
                <Counter value={s.v} suffix={s.s} />
              </div>
              <div className="text-xs uppercase tracking-widest font-bold mb-3">{s.l}</div>
              <p className="text-silver text-sm leading-relaxed">{s.c}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
