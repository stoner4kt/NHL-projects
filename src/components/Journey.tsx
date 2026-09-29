import { motion } from "framer-motion";
import { Compass, Quote, Target } from "lucide-react";
import { IMAGES, TIMELINE } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-coal py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          label="Our Journey"
          title={
            <>
              From Malamulele to the <span className="flame-gradient-text">SADC region.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-flame via-line to-transparent md:left-[9px]" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div className="group relative pl-10 md:pl-14">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 300, damping: 18 }}
                      className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-flame bg-coal transition-colors duration-300 group-hover:bg-flame md:h-[19px] md:w-[19px]"
                    />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-3xl tracking-wide text-flame md:text-4xl">
                        {t.year}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.26em] text-fog uppercase">
                        {t.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl tracking-wide text-bone uppercase md:text-2xl">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-lg leading-relaxed text-fog">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Side visual + vision/mission */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={IMAGES.welderPipe}
                  alt="Gas technician welding a pipe"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 max-w-[240px] font-mono text-[11px] leading-relaxed tracking-[0.14em] text-bone/80 uppercase">
                  Qualified trade-test plumbers, welders & registered gas practitioners
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-line bg-ink p-8 transition-colors duration-300 hover:border-flame/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-flame/15">
                    <Target className="h-5 w-5 text-flame" />
                  </span>
                  <h3 className="font-display text-lg tracking-wide text-bone uppercase">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-fog">
                  To be a fast-growing company for all LPG gas exchange and refill —
                  doing all compressed gases, LPG and natural gas installation,
                  maintenance and repairs in South Africa, with admirable
                  workmanship.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="rounded-2xl border border-line bg-ink p-8 transition-colors duration-300 hover:border-flame/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-flame/15">
                    <Compass className="h-5 w-5 text-flame" />
                  </span>
                  <h3 className="font-display text-lg tracking-wide text-bone uppercase">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-fog">
                  Gasmen will provide services and a focused range of
                  performance-enhancing gases to valued customers — through
                  excellence in operations, customer service and delivery.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Quote strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-start gap-6 rounded-2xl border border-flame/25 bg-gradient-to-r from-flame/[0.08] to-transparent p-8 md:flex-row md:items-center md:p-10">
            <Quote className="h-10 w-10 shrink-0 text-flame" />
            <p className="max-w-3xl text-lg leading-relaxed text-bone/85 md:text-xl">
              "Our work is done with dedication and passion for an advanced outcome —
              with customer satisfaction at the heart of every project."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
