import { motion } from "framer-motion";

const links = [
  { label: "Journey", href: "#manifesto" },
  { label: "Mobile Unit", href: "#solution" },
  { label: "Industries", href: "#how" },
  { label: "Impact", href: "#metrics" },
  { label: "Live Tracking", href: "/tracking" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 w-full z-50 border-b border-border glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="size-9 bg-gradient-to-br from-accent to-primary rounded-md flex items-center justify-center font-display font-bold text-accent-foreground glow-cyan">
            S
          </div>
          <span className="font-display font-bold tracking-tighter text-xl">SKILL ON WHEELS</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-silver">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-accent text-accent-foreground px-5 py-2 text-sm font-bold hover:brightness-110 transition-all duration-300 rounded-sm"
        >
          REQUEST A UNIT
        </a>
      </div>
    </motion.nav>
  );
}
