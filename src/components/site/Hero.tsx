import { motion } from "framer-motion";
import { ArrowRight, MapPinned, Play, Truck, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const fleetStats = [
  { icon: MapPinned, value: "30", label: "Odisha districts" },
  { icon: Truck, value: "6", label: "Mobile labs shown" },
  { icon: Zap, value: "AR/VR", label: "Simulation-ready" },
];

const heroFrames = [
  "/assets/images/vr-lab-cinematic.png",
  "/assets/images/industrial-sim-command-bay.png",
  "/assets/images/livelihood-nutrition-cinematic.png",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/images/hero-skill-wheels-cinematic.png"
          alt="Cinematic Skill on Wheels truck driving through rural Odisha at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,18,.96)_0%,rgba(5,10,18,.78)_38%,rgba(5,10,18,.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(0,212,255,.34),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(255,138,0,.24),transparent_28%)]" />
        <div className="absolute inset-0 industrial-grid opacity-70" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute right-0 top-24 hidden h-[72vh] w-[48vw] lg:block"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,.18),transparent_58%)]" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center px-6 pb-10">
        <div className="grid items-center gap-12">
          <div className="max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/35 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Real Skill on Wheels fleet · Odisha
            </motion.div>

            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-normal md:text-7xl lg:text-8xl">
              {["Skill on Wheels", "brings the lab", "to the last mile."].map((line, i) => (
                <motion.span
                  key={line}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={i + 1}
                  className={i === 0 ? "block text-white" : "block text-mask-reveal"}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
            >
              Real mobile training units, AI-enabled learning, AR/VR simulations and district-level
              deployment routes for mining, livelihoods, nutrition, sanitation and industrial
              skilling across Odisha.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#connectivity"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-all hover:brightness-110"
              >
                Watch Connectivity <ArrowRight className="size-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-sm border border-accent/50 bg-background/35 px-6 py-4 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-accent/10"
              >
                <Play className="size-4" /> View Command Center
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={7}
          className="mt-14 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-3"
        >
          {fleetStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 bg-background/55 p-5 backdrop-blur">
              <Icon className="size-6 text-accent" />
              <div>
                <div className="font-display text-3xl font-bold">{value}</div>
                <div className="text-xs uppercase tracking-widest text-silver">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={8}
          className="mt-5 hidden max-w-4xl grid-cols-3 gap-3 md:grid"
        >
          {heroFrames.map((src, i) => (
            <div
              key={src}
              className="relative h-24 overflow-hidden rounded-sm border border-white/10 bg-background/50"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-widest text-white/80">
                0{i + 1}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
