import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received. Our deployment team will reach out within 48 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-60" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6"
        >
          Bring The Future To Your District
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter text-mask-reveal"
        >
          REQUEST A MOBILE UNIT.
        </motion.h2>
        <p className="text-silver mb-12 text-lg max-w-xl mx-auto">
          Districts, employers and CSR partners — schedule a deployment, host a demonstration, or
          build a custom skilling cohort for your sector.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-black/40 border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-silver/60"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Work Email"
            className="bg-black/40 border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-silver/60"
          />
          <input
            type="text"
            name="org"
            placeholder="Organisation / District"
            className="bg-black/40 border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-silver/60"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            className="bg-black/40 border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-silver/60"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Which sector and which block of Odisha would you like to skill?"
            className="md:col-span-2 bg-black/40 border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-silver/60 resize-none"
          />
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-accent text-accent-foreground py-5 font-bold text-base hover:brightness-110 transition-all disabled:opacity-60 rounded-sm glow-cyan"
            >
              {loading ? "TRANSMITTING…" : "REQUEST A MOBILE UNIT"}
            </button>
            <a
              href="#"
              className="flex-1 border border-accent/40 text-foreground py-5 font-bold text-base hover:bg-accent/10 transition-all text-center rounded-sm"
            >
              BOOK A DEMONSTRATION
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
