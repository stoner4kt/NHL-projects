import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          label="Our Projects"
          title={
            <>
              Work delivered with <span className="text-outline-flame">dedication</span>{" "}
              & passion.
            </>
          }
          copy="From university science labs to bulk commercial installations — a selection of what our team has delivered."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className="h-full">
              <a
                href={`/services/${({ "Drainage & Water Supply": "gas-system-setup", "Laboratory Renovations": "medical-gas-infrastructure", "Gas Line Installation": "gas-pipe-line-work", "Industrial and Commercial Gas": "lpg-bulk-gas", "Gas Stove": "gas-appliance-installation" } as Record<string, string>)[p.title] || "gas-system-setup"}`
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-coal transition-all duration-300 hover:-translate-y-1.5 hover:border-flame/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full border border-bone/20 bg-ink/60 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-bone uppercase backdrop-blur-md">
                    {p.category}
                  </span>
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-flame to-ember text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-bone uppercase transition-colors group-hover:text-flame">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-fog">{p.subtitle}</p>
                  </div>
                  <span className="font-display text-sm text-fog/40">
                    0{i + 1}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
