const cols = [
  {
    h: "Program",
    l: ["Mobile Units", "Industries", "Curriculum", "Certifications"],
  },
  {
    h: "Partner",
    l: ["Districts", "Industry Partners", "CSR Programs", "Government"],
  },
  {
    h: "About",
    l: ["Mission", "Impact Report", "Press", "Careers"],
  },
];

export function Footer() {
  return (
    <footer className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-8 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center font-display font-bold text-accent-foreground text-sm">
              S
            </div>
            <span className="font-display font-bold tracking-tighter text-xl">SKILL ON WHEELS</span>
          </div>
          <p className="text-silver max-w-xs text-sm leading-relaxed mb-6">
            Bringing the future of industrial training to every corner of Odisha — one mobile unit,
            one village, one career at a time.
          </p>
          <div className="flex gap-3">
            {["X", "in", "YT", "IG"].map((s) => (
              <a
                key={s}
                href="#"
                className="size-9 grid place-items-center border border-border rounded-md text-xs font-bold text-silver hover:text-accent hover:border-accent transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">{c.h}</h4>
            <ul className="space-y-4 text-sm text-silver">
              {c.l.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-[10px] text-silver uppercase tracking-widest">
        <div>© 2026 SKILL ON WHEELS · ODISHA</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent">
            Privacy
          </a>
          <a href="#" className="hover:text-accent">
            Terms
          </a>
          <a href="#" className="hover:text-accent">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}
