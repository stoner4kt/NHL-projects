import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { getServiceGallery, getServicePage } from "../data/services";
import { useEffect } from "react";
import { FlameButton, Reveal } from "./ui";

export default function ServicePage({ slug }: { slug: string }) {
  const service = getServicePage(slug);
  const gallery = getServiceGallery(slug);

  useEffect(() => {
    if (!service) return;
    document.title = service.seoTitle || service.title + " | NHL Projects";
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = service.metaDescription || service.description;
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = window.location.origin + "/services/" + service.slug;
    document.getElementById("service-schema")?.remove();
    const schema = document.createElement("script"); schema.id = "service-schema"; schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Service","name":service.title,"description":service.description,"url":window.location.href,"image":window.location.origin+service.image,"provider":{"@type":"LocalBusiness","name":"NHL Projects (Pty) Ltd","telephone":"+27 84 226 0353","address":{"@type":"PostalAddress","streetAddress":"22 Kokerboom Cres","addressLocality":"Birchleigh, Kempton Park","postalCode":"1621","addressCountry":"ZA"}},"areaServed":[{"@type":"State","name":"Gauteng"},{"@type":"Country","name":"South Africa"}]});
    document.head.appendChild(schema);
    return () => schema.remove();
  }, [service]);
  if (!service) {
    return (
      <main className="min-h-screen bg-ink px-5 py-32 text-bone">
        <div className="mx-auto max-w-3xl">
          <a href="/" className="font-mono text-xs tracking-[0.2em] text-flame uppercase">
            ← Back to NHL Projects
          </a>
          <h1 className="mt-8 font-display text-5xl uppercase">Service not found</h1>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-bone">
      <header className="border-b border-line bg-ink/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/Nhl-Projects-Logo-2048x2048.png" alt="NHL Projects logo" className="h-12 w-12 rounded-xl object-contain" />
            <span className="font-display text-xl tracking-wide uppercase">NHL Projects</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            <a href="/" className="font-mono text-[10px] tracking-[0.18em] text-fog uppercase hover:text-flame">Home</a>
            <a href="/#about" className="font-mono text-[10px] tracking-[0.18em] text-fog uppercase hover:text-flame">About</a>
            <a href="/#services" className="font-mono text-[10px] tracking-[0.18em] text-fog uppercase hover:text-flame">Services</a>
            <a href="/#contact" className="rounded-full border border-line px-5 py-2.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-bone uppercase hover:border-flame hover:text-flame">Get a Quote</a>
          </nav>
          <a href="/#contact" className="rounded-full border border-line px-4 py-2 font-mono text-[9px] font-semibold tracking-[0.18em] text-bone uppercase hover:border-flame hover:text-flame sm:hidden">Quote</a>
        </div>
      </header>      <main>
        <section className="relative overflow-hidden border-b border-line bg-coal py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-fog uppercase transition-colors hover:text-flame"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All Services
              </a>
              <p className="mt-8 font-mono text-[10px] tracking-[0.3em] text-flame uppercase">
                NHL Projects · Service
              </p>
              <h1 className="mt-4 font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-wide uppercase">
                {service.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fog md:text-xl">
                {service.description}
              </p>
              <div className="mt-9">
                <FlameButton href="/#contact">
                  Get a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </FlameButton>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="group relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-bone uppercase">
                  <MapPin className="h-3.5 w-3.5 text-flame" />
                  South Africa · SADC
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">01 · What We Do</p>
              <h2 className="mt-4 font-display text-4xl tracking-wide uppercase md:text-5xl">
                Built for safe, reliable delivery.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
                {service.whatWeDo}
              </p>
              {service.coverage && (
                <p className="mt-6 border-l border-flame/60 pl-5 text-sm leading-relaxed text-bone/75">
                  {service.coverage}
                </p>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-coal p-7 md:p-9">
                <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">
                  02 · Core System Capabilities
                </p>
                <ul className="mt-6 space-y-4">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex gap-3 text-bone/85">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-flame" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-line bg-coal py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">03 · Sectors We Install For</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-wide uppercase md:text-5xl">
                Systems for demanding environments.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.sectors.map((sector, index) => (
                <Reveal key={sector} delay={index * 0.035}>
                  <div className="h-full rounded-2xl border border-line bg-ink p-5 transition-colors hover:border-flame/40">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-flame">0{(index % 9) + 1}</span>
                    <p className="mt-3 font-semibold text-bone">{sector}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {gallery.length > 0 && (
          <section className="border-y border-line bg-coal py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <Reveal><p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">Project Gallery</p><h2 className="mt-4 font-display text-4xl tracking-wide uppercase md:text-5xl">Relevant {service.title} work.</h2></Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (<Reveal key={item.src} delay={index * 0.025}><figure className="overflow-hidden rounded-2xl border border-line bg-ink"><img src={item.src} alt={item.alt} loading={index < 3 ? "eager" : "lazy"} className="aspect-[4/3] w-full object-cover" /><figcaption className="px-4 py-3 text-xs text-fog">{item.alt}</figcaption></figure></Reveal>))}
              </div>
            </div>
          </section>
        )}
        {(service.serviceLevelAgreements || service.whatsCovered || service.plantMaintained) && (
          <section className="py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-3">
              {service.serviceLevelAgreements && (
                <Reveal className="lg:col-span-2">
                  <div className="rounded-2xl border border-line bg-coal p-7 md:p-9">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">Service Level Agreements</p>
                    <div className="mt-6 space-y-4">
                      {service.serviceLevelAgreements.map((item) => (
                        <div key={item.tier} className="border-b border-line pb-4 last:border-0 last:pb-0">
                          <h3 className="font-semibold text-bone">{item.tier}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-fog">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
              {service.whatsCovered && (
                <Reveal delay={0.08}>
                  <div className="h-full rounded-2xl border border-line bg-coal p-7">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">What’s Covered</p>
                    <ul className="mt-5 space-y-2.5 text-sm text-fog">
                      {service.whatsCovered.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )}
              {service.plantMaintained && (
                <Reveal delay={0.12}>
                  <div className="rounded-2xl border border-line bg-coal p-7 lg:col-span-3">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">Plant We Maintain</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.plantMaintained.map((item) => (
                        <span key={item} className="rounded-full border border-line px-4 py-2 text-sm text-fog">{item}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        )}

        <section className="border-t border-line bg-coal py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] text-flame uppercase">Ready to discuss your project?</p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wide uppercase">
                Get a Quote
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-fog">
                Speak with NHL Projects about your installation, maintenance, compliance, or engineering requirements.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <FlameButton href="/#contact">
                  Get a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </FlameButton>
                <FlameButton href="/" variant="outline">Back to Home</FlameButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
