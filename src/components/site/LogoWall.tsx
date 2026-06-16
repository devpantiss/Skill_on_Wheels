const logos = [
  "GOVT. OF ODISHA",
  "SKILL INDIA",
  "TATA STEEL",
  "NALCO",
  "VEDANTA",
  "JINDAL POWER",
  "PARADIP PORT",
  "NSDC",
];

export function LogoWall() {
  const row = [...logos, ...logos];
  return (
    <section className="py-14 border-y border-border bg-black/30 overflow-hidden">
      <p className="text-center text-[10px] uppercase tracking-[0.4em] text-silver mb-10">
        In Partnership With Odisha's Industrial Leaders
      </p>
      <div className="flex whitespace-nowrap marquee">
        {row.map((logo, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-silver/40 px-12"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
