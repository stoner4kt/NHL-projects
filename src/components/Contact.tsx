import { ArrowUpRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { CONTACT, HOURS, SERVICES } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

const INFO = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [CONTACT.phoneIntl],
    href: CONTACT.phoneHref,
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [CONTACT.email],
    href: `mailto:${CONTACT.email}`,
    action: "Write email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: CONTACT.addressLines,
    href: "https://maps.google.com/?q=22+Kokerboom+Cres+Birchleigh+Kempton+Park+1621",
    action: "Get directions",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quotation request — ${form.service || "General enquiry"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nService: ${form.service}\n\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-xl border border-line bg-coal px-4 py-3.5 text-sm text-bone placeholder:text-fog/50 outline-none transition-colors duration-300 focus:border-flame";

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          label="Get In Touch"
          title={
            <>
              Send us a <span className="flame-gradient-text">quick message.</span>
            </>
          }
          copy={CONTACT.area}
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left — info + hours */}
          <div className="flex flex-col gap-4">
            {INFO.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-line bg-coal p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame/40"
                >
                  <span className="grid h-13 w-13 shrink-0 place-items-center rounded-xl bg-flame/12 p-3.5 text-flame transition-colors duration-300 group-hover:bg-flame group-hover:text-ink">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] tracking-[0.24em] text-fog uppercase">
                      {c.title}
                    </p>
                    {c.lines.map((l) => (
                      <p key={l} className="mt-1 truncate font-semibold text-bone">
                        {l}
                      </p>
                    ))}
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-flame uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {c.action} <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}

            {/* Hours */}
            <Reveal delay={0.24}>
              <div className="rounded-2xl border border-line bg-coal p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-flame" />
                  <p className="font-mono text-[10px] tracking-[0.24em] text-fog uppercase">
                    Trading Hours
                  </p>
                </div>
                <div className="mt-4 divide-y divide-line/70">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className={cn(
                        "flex items-center justify-between py-2 text-sm",
                        h.time === "Closed" ? "text-fog/50" : "text-bone/80",
                      )}
                    >
                      <span>{h.day}</span>
                      <span
                        className={cn(
                          "font-mono text-xs",
                          h.time === "Closed" ? "text-flame/70" : "text-fog",
                        )}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.12}>
            <form
              onSubmit={submit}
              className="relative flex h-full flex-col gap-5 rounded-2xl border border-line bg-coal p-7 md:p-9"
            >
              <div className="absolute -top-px left-9 h-px w-24 bg-gradient-to-r from-transparent via-flame to-transparent" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-fog uppercase">
                    Your Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-fog uppercase">
                    Phone or Email
                  </label>
                  <input
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="How do we reach you?"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-fog uppercase">
                  Service Needed
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={cn(field, "appearance-none")}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-coal">
                      {s.title}
                    </option>
                  ))}
                  <option value="Gas Refill & Exchange" className="bg-coal">
                    Gas Refill & Exchange
                  </option>
                  <option value="Other" className="bg-coal">
                    Something else
                  </option>
                </select>
              </div>
              <div className="flex-1">
                <label className="mb-2 block font-mono text-[10px] tracking-[0.22em] text-fog uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project or order…"
                  className={cn(field, "h-full min-h-[130px] resize-none")}
                />
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-flame to-ember py-4 font-mono text-xs font-semibold tracking-[0.18em] text-ink uppercase transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(255,90,31,0.75)]"
              >
                {sent ? "Opening your mail app…" : "Send Message"}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-center font-mono text-[10px] tracking-[0.16em] text-fog/60 uppercase">
                Free quotation on all services — no call-out fee
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
