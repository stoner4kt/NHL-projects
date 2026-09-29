import { ArrowRight, Flame, Truck } from "lucide-react";
import { CONTACT, IMAGES, PRICING } from "../data/content";
import { cn } from "../utils/cn";
import { Counter, Reveal, SectionHeading } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="noise relative overflow-hidden bg-ink py-24 md:py-36">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-flame/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-blu/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading
            index="03"
            label="Refill & Exchange"
            title={
              <>
                Affordable gas, <span className="flame-gradient-text">delivered free</span>{" "}
                the same day.
              </>
            }
            copy="We refill and exchange gas from small to bulk content at an affordable charge — from R280 going up — with free same-day delivery in Kempton Park and surrounding areas."
          />
          <Reveal delay={0.15}>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-coal p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-flame to-ember">
                <Truck className="h-6 w-6 text-ink" />
              </span>
              <div>
                <p className="font-semibold text-bone">Free Same-Day Delivery</p>
                <p className="mt-0.5 text-sm text-fog">
                  Kempton Park & surrounding areas — order today, cook tonight.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:mt-16">
          {PRICING.map((p, i) => (
            <Reveal key={p.size} delay={i * 0.07} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5",
                  p.popular
                    ? "border-flame/60 bg-gradient-to-b from-flame/[0.14] to-coal shadow-[0_20px_60px_-20px_rgba(255,90,31,0.4)]"
                    : "border-line bg-coal hover:border-flame/40"
                )}
              >
                {/* sale badge */}
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-flame px-2.5 py-1 font-mono text-[9px] font-semibold tracking-[0.14em] text-ink uppercase">
                  <Flame className="h-3 w-3" /> Sale
                </span>

                <p className="font-display text-4xl tracking-wide text-bone">{p.size}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-fog uppercase">
                  Gas Exchange
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <p className="font-display text-3xl text-flame">
                    R<Counter value={p.price} />
                  </p>
                  <span className="text-sm text-fog line-through">R{p.was}</span>
                </div>

                <div className="mt-auto pt-6">
                  <div className="mb-4 flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-bone/60 uppercase">
                    <Truck className="h-3.5 w-3.5 text-flame" />
                    Free same-day delivery
                  </div>
                  <a
                    href={CONTACT.phoneHref}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-full py-3 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase transition-all duration-300",
                      p.popular
                        ? "bg-gradient-to-r from-flame to-ember text-ink hover:shadow-[0_10px_30px_-8px_rgba(255,90,31,0.7)]"
                        : "border border-line text-bone hover:border-flame hover:text-flame"
                    )}
                  >
                    Order Now <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom banner */}
        <Reveal delay={0.2}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-line">
            <img
              src={IMAGES.cylindersYellow}
              alt="Stacked gas cylinders"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
            <div className="relative flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <p className="font-mono text-[10px] tracking-[0.28em] text-flame uppercase">
                  9KG — 48KG Cylinders
                </p>
                <p className="mt-3 max-w-md font-display text-2xl leading-tight tracking-wide text-bone uppercase md:text-3xl">
                  Refill or exchange today — we deliver for free.
                </p>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-flame to-ember px-8 py-4 font-mono text-xs font-semibold tracking-[0.18em] text-ink uppercase transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(255,90,31,0.8)]"
              >
                Call {CONTACT.phoneDisplay}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
