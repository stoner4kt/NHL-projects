import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { SERVICE_PAGES } from "../data/services";
import { useEffect, useState } from "react";
import { CONTACT, IMAGES, NAV_LINKS } from "../data/content";
import { cn } from "../utils/cn";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Brand */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-flame)]/40 bg-gradient-to-br from-[#0a1628] to-[#0d1f42] shadow-[0_6px_24px_-6px_rgba(26,111,255,0.45)]">
              <img src={IMAGES.logo} alt="NHL Projects logo" className="absolute inset-0 z-10 h-full w-full object-contain p-1" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <svg viewBox="0 0 40 44" fill="none" className="absolute z-0 h-8 w-8" aria-hidden="true">
                <path d="M20 2L4 8v14c0 9.94 6.84 18.24 16 20 9.16-1.76 16-10.06 16-20V8L20 2z" fill="url(#shieldGrad)" stroke="rgba(26,111,255,0.6)" strokeWidth="0.8" />
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontFamily="Anton, Arial Narrow, sans-serif" letterSpacing="1" fontWeight="700">N</text>
                <defs><linearGradient id="shieldGrad" x1="20" y1="2" x2="20" y2="42" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#1a3a6a" /><stop offset="100%" stopColor="#0a1628" /></linearGradient></defs>
              </svg>
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl tracking-wide text-bone">
                NHL PROJECTS
              </span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.24em] text-fog uppercase">
                t/a NHL Projects (Pty) Ltd
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.filter((l) => l.label !== "Services").map((l) => (
              <a key={l.href} href={l.href} className="group relative font-mono text-[11px] font-medium tracking-[0.18em] text-fog uppercase transition-colors hover:text-bone">
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-flame transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="group relative">
              <a href="#services" className="flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.18em] text-fog uppercase transition-colors hover:text-bone">
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </a>
              <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-line bg-ink/98 p-2 shadow-2xl backdrop-blur-xl">
                  {SERVICE_PAGES.map((service) => (
                    <a key={service.slug} href={"/services/" + service.slug} className="block rounded-xl px-4 py-3 transition-colors hover:bg-coal hover:text-flame">
                      <span className="block font-display text-lg uppercase">{service.title}</span>
                      <span className="mt-1 block font-mono text-[9px] tracking-[0.14em] text-fog/70 uppercase">View service</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-flame md:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-flame to-ember px-6 py-2.5 font-mono text-[11px] font-semibold tracking-[0.18em] text-ink uppercase transition-all duration-300 hover:shadow-[0_8px_28px_-6px_rgba(255,90,31,0.7)] sm:block"
            >
              Free Quote
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-bone transition-colors hover:border-flame hover:text-flame lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/97 backdrop-blur-2xl"
          >
            <div className="flex h-[72px] items-center justify-between px-5 md:px-8">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-flame)]/40 bg-gradient-to-br from-[#0a1628] to-[#0d1f42] shadow-[0_6px_24px_-6px_rgba(26,111,255,0.45)]">
              <img src={IMAGES.logo} alt="NHL Projects logo" className="absolute inset-0 z-10 h-full w-full object-contain p-1" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <svg viewBox="0 0 40 44" fill="none" className="absolute z-0 h-7 w-7" aria-hidden="true">
                <path d="M20 2L4 8v14c0 9.94 6.84 18.24 16 20 9.16-1.76 16-10.06 16-20V8L20 2z" fill="url(#shieldGrad)" stroke="rgba(26,111,255,0.6)" strokeWidth="0.8" />
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontFamily="Anton, Arial Narrow, sans-serif" letterSpacing="1" fontWeight="700">N</text>
                <defs><linearGradient id="shieldGrad" x1="20" y1="2" x2="20" y2="42" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#1a3a6a" /><stop offset="100%" stopColor="#0a1628" /></linearGradient></defs>
              </svg>
            </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-bone hover:border-flame hover:text-flame"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {NAV_LINKS.filter((l) => l.label !== "Services").map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="group flex items-baseline gap-4 border-b border-line py-4">
                  <span className="font-mono text-xs text-flame">0{i + 1}</span><span className="font-display text-4xl tracking-wide text-bone uppercase transition-colors group-hover:text-flame">{l.label}</span>
                </motion.a>
              ))}
              <div className="border-b border-line py-4">
                <p className="flex items-center gap-2 font-display text-4xl tracking-wide text-bone uppercase"><span className="font-mono text-xs text-flame">05</span> Services</p>
                <div className="mt-3 grid gap-1 pl-7">
                  {SERVICE_PAGES.map((service) => (
                    <a key={service.slug} href={"/services/" + service.slug} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-mono text-xs tracking-[0.08em] text-fog uppercase transition-colors hover:bg-coal hover:text-flame">{service.title}</a>
                  ))}
                </div>
              </div>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 pb-10"
            >
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 font-mono text-sm text-fog"
              >
                <Phone className="h-4 w-4 text-flame" /> {CONTACT.phoneIntl}
              </a>
              <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-fog/60 uppercase">
                Live green with gas — Est. 2019
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
