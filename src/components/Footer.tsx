import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, IMAGES, NAV_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-coal">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-flame)]/40 bg-gradient-to-br from-[#0a1628] to-[#0d1f42] shadow-[0_6px_24px_-6px_rgba(26,111,255,0.45)]">
              <img src={IMAGES.logo} alt="NHL Projects logo" className="absolute inset-0 z-10 h-full w-full object-contain p-1" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <svg viewBox="0 0 40 44" fill="none" className="absolute z-0 h-7 w-7" aria-hidden="true">
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
                  t/a Witness Gasmen (Pty) Ltd
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
              NHL Projects — Trading As Witness Gasmen (Pty) Limited. We are
              accountable for all our decisions and activities that may impact the
              environment and society in general, to live green with gas.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["BEE Level 1", "CIDB", "LPGSA", "SAQCC Gas"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-fog uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-fog uppercase">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-bone/75 transition-colors hover:text-flame"
                  >
                    <span className="h-px w-3 bg-flame/50 transition-all duration-300 group-hover:w-5 group-hover:bg-flame" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-fog uppercase">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-start gap-3 text-bone/75 transition-colors hover:text-flame"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                  {CONTACT.phoneIntl}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 break-all text-bone/75 transition-colors hover:text-flame"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-bone/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                <span>
                  {CONTACT.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="pointer-events-none mt-16 select-none overflow-hidden">
          <p className="text-outline text-center font-display text-[clamp(3rem,12vw,11rem)] leading-none tracking-wider uppercase opacity-60">
            Gasmen
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-line pt-8 md:flex-row">
          <p className="text-center font-mono text-[10px] tracking-[0.18em] text-fog/70 uppercase">
            NHL Projects © 2024 · Developed by SABTG Tech Solutions
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] text-fog/70 uppercase">
            Live green with gas — Est. 2019
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group grid h-11 w-11 place-items-center rounded-full border border-line text-fog transition-all duration-300 hover:border-flame hover:bg-flame hover:text-ink"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
