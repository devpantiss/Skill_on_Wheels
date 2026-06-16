import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const PHRASE =
  "We are bringing the future of industrial training to every corner of Odisha — a fleet of intelligent mobile units carrying AR, VR and AI deep into the villages, the mines and the shorelines where opportunity has never reached before.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export function ScrollManifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.1"],
  });

  const words = PHRASE.split(" ");

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative min-h-[200vh] bg-background"
      aria-label="Manifesto"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-10">/ Manifesto</p>
          <p className="font-display font-bold tracking-tighter leading-[1.05] text-3xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
