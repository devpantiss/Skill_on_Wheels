import { motion } from "framer-motion";

const cases = [
  {
    q: "I had never left my village. Inside the VR lab I walked through a steel plant and learned how to tap a furnace. Six weeks later I was hired in Angul.",
    n: "Suresh Munda",
    r: "Operator Trainee, Tata Steel Kalinganagar",
    m: "Hired in 42 days",
  },
  {
    q: "Skill on Wheels reached our block in the Niyamgiri range. For the first time, our youth could train for industry without leaving their families behind.",
    n: "Rashmita Patra",
    r: "District Skill Officer, Rayagada",
    m: "1,200 trained · 1 year",
  },
  {
    q: "The simulator catches what classrooms can't. Our new recruits arrive already knowing the cab, the controls, the safety reflexes. That's a step-change.",
    n: "Anil Sahoo",
    r: "Head of L&D, NALCO Damanjodi",
    m: "−63% onboarding time",
  },
];

export function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">
            Voices From The Road
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Stories from the journey.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.figure
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-3xl p-8 flex flex-col justify-between min-h-[360px] hover:border-accent/50 transition-colors"
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight">
                "{c.q}"
              </blockquote>
              <div>
                <div className="text-accent font-display font-bold text-2xl mb-6 tracking-tighter">
                  {c.m}
                </div>
                <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="size-10 rounded-full bg-gradient-to-br from-accent/60 to-surface-elevated border border-border" />
                  <div>
                    <div className="font-bold text-sm">{c.n}</div>
                    <div className="text-silver text-xs">{c.r}</div>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
