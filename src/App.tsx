import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ServicePage from "./components/ServicePage";
import Testimonials from "./components/Testimonials";
import { Marquee } from "./components/ui";

const SERVICE_PATH_PREFIX = "/services/";

const ACCREDITATION_STRIP = [
  "BEE Level 1 Contributor",
  "CIDB Registered",
  "LPGSA Member",
  "SAQCC Gas Registered",
  "Free Same-Day Delivery",
  "Certificate of Compliance Issued",
  "SADC Regional Operations",
];

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname.startsWith(SERVICE_PATH_PREFIX)) {
    return <ServicePage slug={pathname.slice(SERVICE_PATH_PREFIX.length)} />;
  }

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <Nav />
      <main>
        <Hero />

        {/* Accreditation marquee */}
        <div className="relative bg-[#0d1f42] py-4">
          <Marquee
            items={ACCREDITATION_STRIP}
            className="text-bone"
            separatorClassName="text-[var(--color-flame)]/80"
          />
        </div>

        <About />
        <Services />
        <Pricing />
        <Journey />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
