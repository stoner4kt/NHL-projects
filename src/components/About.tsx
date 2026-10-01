import { motion } from "framer-motion";
import { BadgeCheck, Flame, Leaf } from "lucide-react";
import { ACCREDITATIONS, IMAGES, VALUES } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 md:py-36">
      {/* Giant ghost word */}
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute -top-4 left-0 font-display text-[clamp(6rem,18vw,16rem)] leading-none tracking-wider uppercase opacity-[0.35] select-none"
      >
        Gasmen
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          label="Who We Are"
          title={
            <>
              A South African gas company,{" "}
              <span className="flame-gradient-text">built green.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* Left — story + image */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-bone/85 md:text-xl">
                We are{" "}
                <span className="font-semibold text-bone">
                  NHL Projects — Trading As NHL Projects (Pty) Limited
                </span>
                , a South African company with BEE Level 1, formed and founded by{" "}
                <span className="font-semibold text-flame">Witness Mabasa</span>{" "}
                from the north of Limpopo, in Malamulele.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 leading-relaxed text-fog">
                NHL Projects holds itself accountable for all decisions and
                activities that may impact the environment and society in general —
                to live green with gas. What began as a one-man domestic installation
                operation is today a registered, multi-accredited team serving the
                public, private and domestic sectors. We serve clients nationwide across South Africa and throughout the Southern African Development Community (SADC) region.
              </p>
            </Reveal>

          </div>

          {/* Right — values */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="font-mono text-[11px] tracking-[0.3em] text-fog uppercase">
                Our Values
              </p>
            </Reveal>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={0.12 + i * 0.07}>
                  <div className="group relative py-7 transition-colors duration-300 hover:bg-steel/50">
                    <div className="flex items-start gap-6">
                      <span className="font-display text-2xl text-flame/70 transition-colors group-hover:text-flame">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-wide text-bone uppercase md:text-2xl">
                          {v.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-fog">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                    <Flame className="absolute right-2 top-7 h-4 w-4 text-flame opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-fog uppercase">
              <Flame className="h-3.5 w-3.5 text-flame" />
              Accreditations & Compliance
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ACCREDITATIONS.map((a, i) => (
              <Reveal key={a.abbr} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-coal p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame/50">
                  <div className="absolute -right-6 -top-6 font-display text-7xl text-bone/[0.04] transition-colors duration-300 group-hover:text-flame/10">
                    {a.abbr}
                  </div>
                  <p className="font-display text-lg tracking-wide text-flame uppercase">
                    {a.abbr}
                  </p>
                  <h4 className="mt-3 font-semibold text-bone">{a.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
