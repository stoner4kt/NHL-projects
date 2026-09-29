import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { Flame } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------------- Reveal on scroll ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section label + heading ---------------- */

export function SectionHeading({
  index,
  label,
  title,
  copy,
  align = "left",
  dark = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase",
            align === "center" && "justify-center",
            dark ? "text-ink/70" : "text-fog"
          )}
        >
          <span className={cn("flex items-center gap-2", dark ? "text-flame" : "text-flame")}>
            <Flame className="h-3.5 w-3.5 animate-flicker" strokeWidth={2.5} />
            <span className={dark ? "text-ink/60" : "text-fog"}>{index}</span>
          </span>
          <span className={cn("h-px w-10", dark ? "bg-ink/30" : "bg-line")} />
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] tracking-wide uppercase",
            dark ? "text-ink" : "text-bone"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed md:text-lg",
              align === "center" && "mx-auto",
              dark ? "text-ink/70" : "text-fog"
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Marquee ---------------- */

export function Marquee({
  items,
  className,
  slow = false,
  separator = true,
  separatorClassName = "text-flame",
}: {
  items: string[];
  className?: string;
  slow?: boolean;
  separator?: boolean;
  separatorClassName?: string;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-lg tracking-wider uppercase md:text-xl">
            {item}
          </span>
          {separator && (
            <Flame
              className={cn("h-4 w-4 shrink-0", separatorClassName)}
              strokeWidth={2.5}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          slow ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        {row}
        {row}
      </div>
    </div>
  );
}

/* ---------------- Animated counter ---------------- */

export function Counter({
  value,
  className,
  duration = 1.6,
}: {
  value: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current)
        ref.current.textContent = Math.round(v).toLocaleString("en-ZA");
    });
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}

/* ---------------- Flame button ---------------- */

export function FlameButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.18em] uppercase transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const styles = {
    primary:
      "bg-gradient-to-r from-flame to-ember text-ink shadow-[0_8px_32px_-8px_rgba(255,90,31,0.55)] hover:shadow-[0_12px_40px_-6px_rgba(255,90,31,0.7)]",
    outline:
      "border border-bone/25 text-bone hover:border-flame hover:text-flame bg-ink/20 backdrop-blur-sm",
    dark: "bg-ink text-bone hover:bg-steel",
  } as const;

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </>
  );

  if (href)
    return (
      <a href={href} onClick={onClick} className={cn(base, styles[variant], className)}>
        {inner}
      </a>
    );
  return (
    <button onClick={onClick} className={cn(base, styles[variant], className)}>
      {inner}
    </button>
  );
}
