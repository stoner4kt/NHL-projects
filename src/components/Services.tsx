import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.6 });
  const y = useSpring(my, { stiffness: 160, damping: 22, mass: 0.6 });

  return (
    <section
      id="services"
      className="relative bg-coal py-24 md:py-36"
      onMouseMove={(e) => {
        mx.set(Math.min(e.clientX + 28, window.innerWidth - 350));
        my.set(Math.min(Math.max(e.clientY - 190, 80), window.innerHeight - 280));
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          label="What We Do"
          title={
            <>
              Gas products & services for a{" "}
              <span className="text-outline-flame">live-green</span> society.
            </>
          }
          copy="With a wide range of gas products and services, we have a lot in stock — from bulk LPG installation to same-day cylinder exchange."
        />

        {/* Service rows */}
        <div className="mt-16 border-t border-line lg:mt-20">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <a
                href={`/services/${({ "Gas Stoves": "gas-appliance-installation", "Certificate of Compliance": "gas-compliance-safety", "Cylinder Exchange": "lpg-bulk-gas", "Gas Welding": "industrial-gas-infrastructure" } as Record<string, string>)[s.title] || "gas-system-setup"}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative block border-b border-line py-8 transition-colors duration-300 hover:bg-steel/40 md:py-10"
              >
                <div className="flex items-center gap-5 px-1 md:gap-10 md:px-4">
                  <span
                    className={cn(
                      "font-display text-lg transition-colors duration-300 md:text-xl",
                      active === i ? "text-flame" : "text-fog/50"
                    )}
                  >
                    {s.id}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3
                        className={cn(
                          "font-display text-[clamp(1.6rem,4vw,3rem)] tracking-wide uppercase transition-all duration-300",
                          active === i ? "translate-x-2 text-bone md:translate-x-4" : "text-bone/75"
                        )}
                      >
                        {s.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-[0.22em] text-flame uppercase">
                        {s.tagline}
                      </span>
                    </div>
                    {/* Mobile inline image + copy */}
                    <div className="mt-4 lg:hidden">
                      <div className="overflow-hidden rounded-xl border border-line">
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          className="aspect-[16/9] w-full object-cover"
                        />
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-fog">{s.desc}</p>
                      {s.bullets && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-xs text-bone/70">
                              <Check className="h-3.5 w-3.5 text-flame" /> {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span
                    className={cn(
                      "hidden h-12 w-12 shrink-0 place-items-center rounded-full border transition-all duration-300 md:grid",
                      active === i
                        ? "rotate-45 border-flame bg-flame text-ink"
                        : "border-line text-fog"
                    )}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                {/* Desktop hover strip */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-flame via-ember to-transparent transition-transform duration-500",
                    active === i ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Floating image preview (desktop) */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-40 hidden lg:block"
      >
        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[240px] w-[320px] overflow-hidden rounded-2xl border border-bone/15 shadow-2xl shadow-black/60"
            >
              <img
                src={SERVICES[active].image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] tracking-[0.24em] text-bone uppercase">
                {SERVICES[active].tagline}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
