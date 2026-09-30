import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Flame, MapPin } from "lucide-react";
import { useRef } from "react";
import { IMAGES, STATS } from "../data/content";
import { FlameButton } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="noise relative flex min-h-svh flex-col overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={IMAGES.heroFlames}
          alt="Blue gas flames on a stove burner"
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      <div className="grid-bg absolute inset-0 opacity-60" />

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-36 pb-16 md:px-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mb-8 flex flex-wrap items-center gap-4"
        >
          <span className="flex items-center gap-2.5 rounded-full border border-bone/15 bg-ink/40 px-4 py-2 font-mono text-[10px] tracking-[0.28em] text-bone/80 uppercase backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-flame" />
            NHL Projects (Pty) Ltd — Est. 2019
          </span>
          <span className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-fog uppercase md:flex">
            <MapPin className="h-3.5 w-3.5 text-flame" />
            Kempton Park, South Africa
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display leading-[0.88] tracking-wide uppercase">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="block text-[clamp(3.2rem,11vw,9.5rem)] text-bone"
            >
              Live Green
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.48, ease }}
              className="flex flex-wrap items-center gap-x-6 text-[clamp(3.2rem,11vw,9.5rem)]"
            >
              <span className="text-outline">With</span>
              <span className="flame-gradient-text animate-flicker">Gas</span>
              <Flame className="h-[0.55em] w-[0.55em] text-flame" strokeWidth={2.5} />
            </motion.span>
          </span>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg"
        >
          NHL Projects — a BEE Level 1 South African gas company. We hold ourselves
          accountable for every decision and activity that impacts the environment
          and society, delivering certified LPG installation, refill and exchange
          across Gauteng and the SADC region.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <FlameButton href="#contact">
            Get a Free Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </FlameButton>
          <FlameButton href="#pricing" variant="outline">
            Order Gas Refill
          </FlameButton>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.05, ease }}
        className="relative z-10 border-t border-bone/10 bg-ink/55 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-bone/10">
          {STATS.map((s, i) => (
            <div key={i} className="group px-5 py-5 md:px-8">
              <p className="font-display text-2xl tracking-wide text-bone transition-colors duration-300 group-hover:text-flame md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.22em] text-fog uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-fog transition-colors hover:text-flame lg:flex"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
