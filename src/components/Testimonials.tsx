import { ArrowUpRight, Quote, Star } from "lucide-react";
import { IMAGES, TESTIMONIALS } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function Testimonials() {
  return (
    <>
      <section className="relative bg-coal py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            index="06"
            label="Customer Testimonials"
            title={
              <>
                What our valued clients <span className="flame-gradient-text">testify.</span>
              </>
            }
            align="center"
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.09} className="h-full">
                <figure className="group relative flex h-full flex-col rounded-2xl border border-line bg-ink p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-flame/40">
                  <Quote className="h-8 w-8 text-flame/60 transition-colors group-hover:text-flame" />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-ember text-ember" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 leading-relaxed text-bone/85">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 border-t border-line pt-5">
                    <p className="font-display text-base tracking-wide text-bone uppercase">
                      {t.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.22em] text-flame uppercase">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- CTA band -------- */}
      <section className="noise relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.orangeFlames}
            alt="Orange gas flames"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-coal via-transparent to-ink" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center md:px-8 md:py-40">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-ember uppercase">
              Are you looking for —
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,6.5vw,5rem)] leading-[0.95] tracking-wide text-bone uppercase">
              An affordable gas refill or exchange & a{" "}
              <span className="flame-gradient-text">certified LP gas installer?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-flame to-ember px-9 py-4 font-mono text-xs font-semibold tracking-[0.18em] text-ink uppercase transition-all duration-300 hover:shadow-[0_16px_50px_-10px_rgba(255,90,31,0.85)]"
              >
                Get Your Free Quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-8 font-mono text-[11px] tracking-[0.24em] text-bone/60 uppercase">
              No call-out fee · Free quotations · Same-day delivery
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
