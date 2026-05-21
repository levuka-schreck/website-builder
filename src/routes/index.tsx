import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, Twitter, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/opifex/hero.jpg";
import workersImg from "@/assets/opifex/workers.jpg";
import serviceImg from "@/assets/opifex/service.jpg";
import t1 from "@/assets/opifex/t1.jpg";
import t2 from "@/assets/opifex/t2.jpg";
import t3 from "@/assets/opifex/t3.jpg";
import contactImg from "@/assets/opifex/contact.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Opifex Group — Engineering Excellence in Construction" },
      { name: "description", content: "Premier consulting firm delivering enterprise-grade solutions for contractors and construction professionals." },
      { property: "og:title", content: "The Opifex Group" },
      { property: "og:description", content: "Engineering excellence in construction consulting." },
    ],
  }),
  component: Home,
});

const services = [
  "Project Planning",
  "Construction Management",
  "Cost Estimation",
  "Process Optimization",
  "Risk Management",
  "Architectural Services",
];

const stats = [
  { n: "150", l: "projects completed" },
  { n: "85", l: "satisfied clients" },
  { n: "25", l: "years of experience" },
  { n: "12", l: "industry awards" },
];

const testimonials = [
  { img: t1, name: "John Smith", role: "CEO, Smith Construction", quote: "The Opifex Group transformed our approach to project management. Their expertise and attention to detail have saved us countless hours and resources while improving the quality of our builds." },
  { img: t2, name: "Emily Johnson", role: "Principal Architect, Johnson & Partners", quote: "Working with The Opifex Group has been a game-changer for our architectural practice. Their technical knowledge and innovative solutions have elevated our designs to new heights." },
  { img: t3, name: "Michael Rodriguez", role: "Director, Metropolitan Developments", quote: "The team at Opifex brought exceptional value to our commercial development. Their strategic insights and technical expertise helped us navigate complex challenges with confidence." },
];

function Logo() {
  return (
    <div className="text-sm font-semibold tracking-wide">
      THE<span className="text-primary">OPIFEX</span>GROUP
    </div>
  );
}

function PillButton({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const styles = variant === "primary"
    ? "bg-primary text-primary-foreground hover:brightness-110"
    : "bg-surface/60 text-foreground border border-border hover:bg-surface";
  return (
    <button className={`inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition ${styles} ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

function Nav() {
  const links = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <PillButton variant="ghost">Contact Us</PillButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-12">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Modern building" className="absolute right-0 top-0 h-full w-3/5 object-cover [mask-image:linear-gradient(to_right,transparent,black_25%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 relative">
        <h1 className="font-semibold text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Engineering Excellence<br />
          <span className="text-primary">In Construction</span>
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
          We deliver enterprise-grade consulting solutions that empower contractors and construction professionals to optimize operations, maximize efficiency, and deliver exceptional results on every project.
        </p>
        <div className="mt-10">
          <PillButton>Our Services</PillButton>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex items-baseline gap-4">
            <span className="text-5xl font-semibold text-primary">{s.n}</span>
            <span className="text-sm text-muted-foreground leading-tight max-w-[6rem]">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Your Trusted Partner in Construction Excellence
        </h2>
      </div>
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          The Opifex Group is a premier consulting firm specializing in providing innovative solutions for construction professionals and contractors. With decades of combined experience, our team of experts brings unparalleled knowledge and insights to every project.
        </p>
        <p>
          We understand the complex challenges facing today's construction industry and work closely with our clients to develop tailored strategies that optimize efficiency, reduce costs, and enhance project outcomes.
        </p>
        <PillButton>Start a Project</PillButton>
      </div>
    </section>
  );
}

function WorkersBanner() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-3xl overflow-hidden">
        <img src={workersImg} alt="Construction team" className="w-full h-72 md:h-96 object-cover" />
      </div>
    </div>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold">Our Services</h2>
        <p className="text-muted-foreground leading-relaxed">
          Comprehensive consulting across the full project lifecycle — from early planning to final delivery — tailored to the realities of modern construction.
        </p>
      </div>
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-4 space-y-3">
          {services.map((s, i) => (
            <button
              key={s}
              onClick={() => setActive(i)}
              className={`w-full flex items-center justify-between rounded-full px-5 py-3.5 text-xs font-semibold tracking-widest uppercase transition ${
                active === i ? "bg-accent text-accent-foreground" : "bg-surface text-foreground hover:bg-surface/70"
              }`}
            >
              {s}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          ))}
        </div>
        <div className="md:col-span-5 rounded-2xl overflow-hidden relative">
          <img src={serviceImg} alt={services[active]} className="w-full h-full object-cover min-h-[360px]" />
          <button className="absolute top-4 right-4 bg-surface/80 backdrop-blur rounded-lg p-2 border border-border md:hidden">
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="md:col-span-3 flex flex-col justify-end gap-4">
          <button className="self-end bg-surface rounded-lg p-2 border border-border hidden md:inline-flex">
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <h3 className="text-2xl font-semibold text-foreground">{services[active]}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Comprehensive {services[active].toLowerCase()} services to ensure your projects start with a solid foundation, clear objectives, and optimized resource allocation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Client Testimonials</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Real outcomes from real partnerships. Here's what construction leaders say about working with The Opifex Group.
          </p>
        </div>
        <div className="flex md:justify-end items-start">
          <PillButton>View More Testimonials</PillButton>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-surface rounded-2xl overflow-hidden flex flex-col">
            <div className="flex gap-4 p-4 items-stretch relative">
              <img src={t.img} alt={t.name} className="w-28 h-36 object-cover rounded-xl flex-shrink-0" />
              <div className="flex-1 pt-2">
                <h3 className="text-base font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-primary mt-1">{t.role}</p>
              </div>
              <div className="absolute left-[6.5rem] top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1.5 border border-border">
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>
            <p className="px-5 pb-6 text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="bg-surface rounded-3xl overflow-hidden grid md:grid-cols-[1fr_1fr_1fr] gap-0">
        <div className="p-10 space-y-8">
          <h2 className="text-4xl font-semibold leading-tight">Contact<br />Information</h2>
          <ul className="space-y-5 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span>1234 Construction Ave.<br />Suite 500<br />New York, NY 10001</span></li>
            <li className="flex gap-3 items-center"><Phone className="h-5 w-5 text-primary flex-shrink-0" />(555) 123-4567</li>
            <li className="flex gap-3 items-center"><Mail className="h-5 w-5 text-primary flex-shrink-0" />info@theopifexgroup.com</li>
            <li className="flex gap-3"><Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span>Monday – Friday:<br />9:00 AM – 5:00 PM</span></li>
          </ul>
        </div>
        <form className="p-10 space-y-5">
          {[
            { l: "Full Name", p: "Ex. John Doe" },
            { l: "Email Address", p: "Ex. johndoe@xyz.abc" },
            { l: "Subject", p: "Subject Here" },
          ].map((f) => (
            <div key={f.l}>
              <label className="text-xs text-muted-foreground">{f.l}</label>
              <input placeholder={f.p} className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary" />
            </div>
          ))}
          <div>
            <label className="text-xs text-muted-foreground">Your Message</label>
            <textarea rows={3} placeholder="Type your message" className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary resize-none" />
          </div>
          <PillButton>Send Message</PillButton>
        </form>
        <div className="relative min-h-[300px]">
          <img src={contactImg} alt="Office" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Services", items: services },
    { title: "Quick Links", items: ["Home", "About Us", "Services", "Projects", "Testimonials", "Contact Us"] },
  ];
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Logo />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Delivering excellence in construction and architecture consulting for over two decades. Our mission is to transform the built environment through technical innovation and strategic expertise.
          </p>
          <div className="flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-surface flex items-center justify-center hover:bg-primary/20 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-foreground font-semibold mb-5">{c.title}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {c.items.map((i) => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-foreground font-semibold mb-5">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest industry insights and company news.</p>
          <input placeholder="Email here" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:border-primary" />
          <PillButton className="w-full justify-center">Subscribe</PillButton>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground text-center">
          © 2025 The Opifex Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Stats />
      <About />
      
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
