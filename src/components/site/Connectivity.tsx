import { motion } from "framer-motion";
import { Activity, MapPinned, RadioTower, Route } from "lucide-react";

const signalStats = [
  { icon: Route, value: "42", label: "Active route links" },
  { icon: MapPinned, value: "30", label: "District coverage model" },
  { icon: RadioTower, value: "8", label: "Sector command feeds" },
  { icon: Activity, value: "Live", label: "Fleet signal loop" },
];

export function Connectivity() {
  return (
    <section
      id="connectivity"
      className="relative overflow-hidden border-y border-border bg-black py-32"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/images/odisha-connectivity-aerial.png"
          alt=""
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,18,.96),rgba(5,10,18,.52),rgba(5,10,18,.9))]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            Odisha Connectivity
          </p>
          <h2 className="max-w-xl font-display text-4xl font-bold tracking-normal text-mask-reveal md:text-6xl">
            A moving training network, not a static campus.
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-silver md:text-base">
            The connectivity loop shows how Skill on Wheels can route mobile labs, sector modules
            and certification data across Odisha’s districts from one live operating layer.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {signalStats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-md border border-accent/20 bg-background/55 p-4 backdrop-blur"
              >
                <Icon className="mb-3 size-5 text-accent" />
                <div className="font-display text-2xl font-bold">{value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-silver">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative overflow-hidden rounded-md border border-accent/35 bg-surface p-2 glow-cyan"
        >
          <img
            src="/assets/videos/odisha-connectivity-loop.gif"
            alt="Animated GIF showing Skill on Wheels connectivity across Odisha districts"
            loading="lazy"
            className="aspect-video w-full rounded-sm object-cover"
          />
          <div className="pointer-events-none absolute inset-2 rounded-sm bg-[linear-gradient(180deg,transparent_52%,rgba(5,10,18,.82))]" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-sm border border-accent/30 bg-background/70 px-4 py-3 text-xs uppercase tracking-widest text-accent backdrop-blur">
              District route pulses
            </div>
            <div className="rounded-sm border border-white/10 bg-background/70 px-4 py-3 text-xs uppercase tracking-widest text-silver backdrop-blur">
              Live fleet signal
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
