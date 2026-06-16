import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How can my district request a Skill on Wheels unit?",
    a: "District administrations and industry partners can request a deployment through our partnership desk. A unit can typically be scheduled to your block within 4–6 weeks based on fleet availability.",
  },
  {
    q: "Who is eligible for training?",
    a: "Youth aged 18–35 from Odisha, with priority for candidates from tribal, rural and underserved regions. Training, accommodation and assessment are fully sponsored under our government and CSR programs.",
  },
  {
    q: "What certifications do learners receive?",
    a: "Every program is aligned to NSDC and Sector Skill Council standards. Graduates earn industry-recognised certifications accepted by all our partner employers across mining, steel, power and shipping.",
  },
  {
    q: "How do industry partners hire from the program?",
    a: "Partner employers receive a live talent dashboard with assessment scores, sector specialisation and placement availability. Most cohorts are pre-placed before graduation.",
  },
  {
    q: "Can a unit operate without electricity or internet?",
    a: "Yes. Each mobile unit is energy-independent with on-board solar and battery, and uses satellite uplink for connectivity. Designed for the deepest blocks of Odisha.",
  },
];

export function FAQ() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">Frequently Asked</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-16">
          Everything you need to know.
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-surface/40 data-[state=open]:bg-surface"
            >
              <AccordionTrigger className="text-left font-display font-bold text-lg hover:no-underline hover:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-silver leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
